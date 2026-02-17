import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { getLessonById } from "./courseData";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, ArrowRight, CheckCircle, XCircle, 
  Loader2, Sparkles, RefreshCw, BookOpen, Star
} from "lucide-react";

export default function LessonView({ lessonId, userEmail, onBack, onComplete, isPremium }) {
  const [lesson, setLesson] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [answer, setAnswer] = useState("");
  const [grading, setGrading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(null);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const l = getLessonById(lessonId);
    setLesson(l);
    setExercise(null);
    setExerciseIndex(0);
    setCompletedExercises([]);
    setAnswer("");
    setResult(null);
    setShowContent(true);
  }, [lessonId]);

  const generateExercise = async () => {
    setGenerating(true);
    setResult(null);
    setAnswer("");

    const existingExercises = await base44.entities.Exercise.filter({
      user_email: userEmail,
      lesson_id: lessonId
    });

    const previousQuestions = existingExercises.map(e => e.question).join("\n---\n");

    // 6 exercícios por lição: 4 completar código, 1 múltipla escolha, 1 teórico
    const exerciseSequence = [
      "complete_code", "complete_code", "complete_code", "complete_code",
      "multiple_choice", "theoretical"
    ];
    const exerciseType = exerciseSequence[exerciseIndex % 6];

    let prompt = "";
    let schema = {};

    if (exerciseType === "multiple_choice") {
      prompt = `Gere um exercício de MÚLTIPLA ESCOLHA sobre "${lesson.title}".

Exercícios anteriores (NÃO REPITA):
${previousQuestions || "nenhum"}

O exercício deve:
- Ter uma pergunta clara
- 4 alternativas (A, B, C, D)
- Apenas UMA alternativa correta
- Estar em português brasileiro

Retorne em JSON.`;

      schema = {
        type: "object",
        properties: {
          question: { type: "string" },
          options: { type: "array", items: { type: "string" } },
          correct_answer: { type: "string", description: "Letra da alternativa correta (A, B, C ou D)" }
        },
        required: ["question", "options", "correct_answer"]
      };
    } else if (exerciseType === "complete_code") {
      prompt = `Gere um exercício de COMPLETAR CÓDIGO sobre "${lesson.title}".

Exercícios anteriores (NÃO REPITA):
${previousQuestions || "nenhum"}

O exercício deve:
- Fornecer um código Java INCOMPLETO com lacunas marcadas como "// COMPLETE AQUI"
- Ser claro sobre o que deve ser completado
- Estar em português brasileiro

Retorne em JSON.`;

      schema = {
        type: "object",
        properties: {
          question: { type: "string", description: "Enunciado do exercício" },
          code_template: { type: "string", description: "Código com lacunas para completar" },
          expected_answer_hint: { type: "string", description: "O que deve ser preenchido" }
        },
        required: ["question", "code_template", "expected_answer_hint"]
      };
    } else {
      prompt = `Gere um exercício TEÓRICO/DISSERTATIVO sobre "${lesson.title}".

Exercícios anteriores (NÃO REPITA):
${previousQuestions || "nenhum"}

O exercício deve:
- Pedir explicação de um conceito
- Ou comparação entre conceitos
- Ou aplicação prática de conhecimento
- Estar em português brasileiro

Retorne em JSON.`;

      schema = {
        type: "object",
        properties: {
          question: { type: "string" },
          expected_answer_hint: { type: "string", description: "Pontos-chave que a resposta deve conter" }
        },
        required: ["question", "expected_answer_hint"]
      };
    }

    const res = await base44.integrations.Core.InvokeLLM({
      prompt,
      response_json_schema: schema
    });

    const newExercise = await base44.entities.Exercise.create({
      user_email: userEmail,
      lesson_id: lessonId,
      exercise_type: exerciseType,
      question: res.question,
      options: res.options || [],
      correct_answer: res.correct_answer || "",
      code_template: res.code_template || "",
      expected_answer_hint: res.expected_answer_hint || "",
      status: "pending",
      attempt_number: existingExercises.filter(e => e.status === "failed").length + 1
    });

    setExercise(newExercise);
    setShowContent(false);
    setGenerating(false);
  };

  const submitAnswer = async () => {
    setGrading(true);

    let prompt = "";
    let res;

    if (exercise.exercise_type === "multiple_choice") {
      // Para múltipla escolha, verificar diretamente
      const correct = answer === exercise.correct_answer;
      res = {
        score: correct ? 10 : 0,
        feedback: correct 
          ? `Correto! A resposta ${answer}) está correta.`
          : `Incorreto. A resposta correta é ${exercise.correct_answer}). Revise o conteúdo da aula.`
      };
    } else {
      prompt = `Você é um professor de Java avaliando a resposta de um aluno.

TIPO DE EXERCÍCIO: ${exercise.exercise_type === "complete_code" ? "Completar Código" : "Questão Teórica"}

EXERCÍCIO: ${exercise.question}

${exercise.code_template ? `CÓDIGO ORIGINAL:\n${exercise.code_template}\n\n` : ""}

CRITÉRIOS DE AVALIAÇÃO: ${exercise.expected_answer_hint}

RESPOSTA DO ALUNO: ${answer}

Avalie a resposta de 0 a 10. Seja justo mas criterioso. A nota deve refletir:
- Correção técnica do código/explicação
- Completude da resposta
- Clareza e organização

Retorne em JSON.`;

      res = await base44.integrations.Core.InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            score: { type: "number", description: "Nota de 0 a 10" },
            feedback: { type: "string", description: "Feedback detalhado em português" }
          },
          required: ["score", "feedback"]
        }
      });
    }

    const passed = res.score >= 7;

    await base44.entities.Exercise.update(exercise.id, {
      user_answer: answer,
      score: res.score,
      feedback: res.feedback,
      status: passed ? "passed" : "failed"
    });

    setResult({
      score: res.score,
      feedback: res.feedback,
      passed
    });

    if (passed) {
      const newCompleted = [...completedExercises, exerciseIndex];
      setCompletedExercises(newCompleted);
      
      // Se completou todos os 6 exercícios, pode avançar
      if (newCompleted.length >= 6) {
        onComplete(lessonId, res.score);
      }
    }

    setGrading(false);
  };

  if (!lesson) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao curso
        </button>
        <Badge className="bg-orange-50 text-orange-700 border-orange-200">
          Aula {lesson.id}
        </Badge>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setShowContent(true)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
            ${showContent ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
        >
          <BookOpen className="w-4 h-4 inline mr-2" />
          Conteúdo
        </button>
        <button
          onClick={() => exercise ? setShowContent(false) : generateExercise()}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
            ${!showContent ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
        >
          <Sparkles className="w-4 h-4 inline mr-2" />
          Exercício
        </button>
      </div>

      {showContent ? (
        /* Lesson Content */
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="prose prose-slate max-w-none 
              prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
              prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4
              prose-table:text-sm prose-th:bg-slate-50 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2
              prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline"
            >
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </div>
          <div className="border-t border-slate-100 p-6 bg-slate-50/50">
            <Button 
              onClick={generateExercise}
              disabled={generating}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl px-6"
            >
              {generating ? (
                <><Loader2 className="w-4 h-4 animate-spin mr-2" />Gerando exercício...</>
              ) : (
                <><Sparkles className="w-4 h-4 mr-2" />Ir para o Exercício</>
              )}
            </Button>
          </div>
        </div>
      ) : (
        /* Exercise */
        <div className="space-y-6">
          {generating ? (
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-12 text-center">
              <Loader2 className="w-10 h-10 animate-spin text-orange-500 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Gerando exercício único para você...</p>
              <p className="text-sm text-slate-400 mt-1">A IA está criando uma questão personalizada</p>
            </div>
          ) : exercise ? (
            <>
              <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    {exercise.exercise_type === "multiple_choice" && "Múltipla Escolha"}
                    {exercise.exercise_type === "complete_code" && "Completar Código"}
                    {exercise.exercise_type === "theoretical" && "Questão Teórica"}
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    Exercício {completedExercises.length + 1}/6
                  </Badge>
                </div>
                <div className="prose prose-slate max-w-none prose-pre:bg-slate-900 prose-pre:rounded-xl">
                  <ReactMarkdown>{exercise.question}</ReactMarkdown>
                </div>
                {exercise.code_template && (
                  <div className="mt-4 bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-sm">
                    <pre>{exercise.code_template}</pre>
                  </div>
                )}
              </div>

              {!result ? (
                <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
                  {exercise.exercise_type === "multiple_choice" ? (
                    <>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">Escolha sua resposta:</label>
                      <div className="space-y-2">
                        {exercise.options.map((opt, idx) => {
                          const letter = String.fromCharCode(65 + idx);
                          return (
                            <button
                              key={idx}
                              onClick={() => setAnswer(letter)}
                              className={`w-full text-left p-4 rounded-xl border-2 transition-all
                                ${answer === letter 
                                  ? "border-orange-500 bg-orange-50" 
                                  : "border-slate-200 hover:border-slate-300"}`}
                            >
                              <span className="font-semibold mr-2">{letter})</span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        {exercise.exercise_type === "complete_code" ? "Complete o código:" : "Sua Resposta:"}
                      </label>
                      <Textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder={exercise.exercise_type === "complete_code" 
                          ? "Cole aqui o código completo..." 
                          : "Escreva sua explicação..."}
                        className="min-h-[200px] font-mono text-sm rounded-xl border-slate-200"
                      />
                    </>
                  )}
                  <div className="flex justify-end mt-4">
                    <Button
                      onClick={submitAnswer}
                      disabled={grading || !answer.trim()}
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6"
                    >
                      {grading ? (
                        <><Loader2 className="w-4 h-4 animate-spin mr-2" />Avaliando...</>
                      ) : (
                        <>Enviar Resposta<ArrowRight className="w-4 h-4 ml-2" /></>
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className={`rounded-2xl border shadow-sm p-6 sm:p-8
                  ${result.passed 
                    ? "bg-green-50 border-green-200" 
                    : "bg-red-50 border-red-200"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {result.passed ? (
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-500" />
                    )}
                    <div>
                      <h3 className={`text-xl font-bold ${result.passed ? "text-green-800" : "text-red-800"}`}>
                        Nota: {result.score.toFixed(1)} / 10
                      </h3>
                      <p className={`text-sm ${result.passed ? "text-green-600" : "text-red-600"}`}>
                        {result.passed ? "Parabéns! Você pode avançar!" : "Nota mínima: 7.0 — Tente novamente!"}
                      </p>
                    </div>
                  </div>
                  <div className={`rounded-xl p-4 ${result.passed ? "bg-green-100/50" : "bg-red-100/50"}`}>
                    <p className="text-sm font-medium mb-2 text-slate-700">Feedback do professor:</p>
                    <div className="prose prose-sm prose-slate max-w-none">
                      <ReactMarkdown>{result.feedback}</ReactMarkdown>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    {result.passed ? (
                      completedExercises.length >= 6 ? (
                        <Button onClick={onBack} className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Próxima Aula
                        </Button>
                      ) : (
                        <Button onClick={() => {
                          setExerciseIndex(prev => prev + 1);
                          generateExercise();
                        }} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Próximo Exercício ({completedExercises.length}/6)
                        </Button>
                      )
                    ) : (
                      <Button onClick={generateExercise} className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Tentar Novamente
                      </Button>
                    )}
                    <Button onClick={() => setShowContent(true)} variant="outline" className="rounded-xl">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Rever Conteúdo
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}