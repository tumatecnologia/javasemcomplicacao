export const exercises = Array.from({ length: 140 }, (_, lessonIndex) => {
  const lessonId = lessonIndex + 1;
  return Array.from({ length: 6 }, (_, exIndex) => {
    // 5 de completar código (0-4), 1 de escrever inteiro (5)
    const isCompleteCode = exIndex < 5;
    
    return {
      id: `l${lessonId}e${exIndex + 1}`,
      lessonId: lessonId,
      type: isCompleteCode ? "complete_code" : "write_code",
      question: `Questão ${exIndex + 1} da aula ${lessonId}`,
      // Exemplo de estrutura para completar código
      code_template: isCompleteCode ? "public class Main { public static void main(String[] args) { ____ } }" : null,
      expected_answer: isCompleteCode ? "System.out.println(\"Hello\");" : "Código completo do aluno aqui",
      status: "pending",
      score: 0
    };
  });
}).flat();
