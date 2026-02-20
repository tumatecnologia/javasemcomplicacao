import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { checkPremiumStatus } from '@/services/paymentControl';
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, ChevronRight, Code, 
  BrainCircuit, Sparkles, Lightbulb, CheckCircle2,
  Terminal
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Curso = () => {
  const { id } = useParams();
  const lessonId = parseInt(id);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [lesson, setLesson] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [exerciseStatus, setExerciseStatus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (!user) { navigate('/Login'); return; }
      setLoading(true);

      const { data: lessonData } = await supabase.from('aulas').select('*').eq('id', lessonId).maybeSingle();

      if (!lessonData) {
        navigate('/Inicio');
        return;
      }

      const moduloNum = parseInt(lessonData.modulo);
      if (moduloNum > 2) {
        const { data: isPremium } = await checkPremiumStatus(user?.email);
        if (!isPremium) {
          toast({ title: "Acesso Restrito", description: "Esta aula é exclusiva para membros Premium.", variant: "destructive" });
          navigate('/Premium');
          return;
        }
      }

      setLesson(lessonData);
      const { data: exData } = await supabase.from('exercicios').select('*').eq('aula_id', lessonId);
      setExercises(exData || []);
      setLoading(false);
    };

    fetchData();
  }, [lessonId, user]);

  const handleCheckAnswer = (exId, correct) => {
    const userAnswer = (answers[exId] || "").trim().toLowerCase();
    const expected = correct.trim().toLowerCase();

    if (userAnswer === expected) {
      setExerciseStatus(prev => ({ ...prev, [exId]: 'success' }));
    } else {
      setExerciseStatus(prev => ({ ...prev, [exId]: 'error' }));
      setTimeout(() => setExerciseStatus(prev => ({ ...prev, [exId]: 'idle' })), 2000);
    }
  };

  if (loading) return <div className="p-20 text-center animate-pulse font-black text-orange-600 text-xl italic uppercase">Processando...</div>;

  return (
    <div className="container mx-auto py-8 max-w-5xl px-4 pb-24 font-sans text-slate-900">
      <Button variant="ghost" onClick={() => navigate('/Inicio')} className="mb-6 hover:bg-orange-50 font-bold text-slate-500 tracking-tighter">
        <ChevronLeft className="mr-1 h-4 w-4" /> VOLTAR AO PAINEL
      </Button>

      {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
           <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase italic tracking-widest">
             Módulo {lesson.modulo}
           </span>
           <span className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-md shadow-orange-100">
             AULA #{lesson.id}
           </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none text-slate-800">
          {lesson.titulo || lesson.título}
        </h1>
      </div>

      {/* CONTEÚDO */}
      <Card className="border-none shadow-xl bg-white overflow-hidden rounded-[2rem] mb-10">
        <div className="h-3 bg-gradient-to-r from-orange-600 via-amber-400 to-orange-500" />
        <CardContent className="p-8 md:p-14">
          
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-slate-700">Explicação Técnica</h2>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap font-medium mb-12 border-l-4 border-orange-50 pl-6">
            {lesson.conteudo}
          </div>

          {/* LABORATÓRIO JAVA - LINHA POR LINHA */}
          {lesson.exemplo_codigo && (
            <div className="mt-12 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-black italic uppercase tracking-tighter text-slate-800 text-lg">
                  <Terminal className="w-6 h-6 text-orange-600" /> Laboratório de Código
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-900 shadow-xl">
                <div className="grid grid-cols-1 divide-y divide-slate-800">
                  {lesson.exemplo_codigo.split('\n').map((linha, idx) => {
                    const [codigo, explicacao] = linha.split('//');
                    return (
                      <div key={idx} className="group flex flex-col md:flex-row hover:bg-slate-800/50 transition-colors">
                        <div className="p-3 md:w-1/2 font-mono text-base text-orange-300 border-r border-slate-800 flex items-center">
                          <span className="mr-3 text-slate-600 text-[10px] w-4 select-none">{idx + 1}</span>
                          <code className="whitespace-pre">{codigo}</code>
                        </div>
                        <div className="p-3 md:w-1/2 bg-slate-900/30 flex items-center">
                          {explicacao && (
                            <div className="flex gap-2 items-center text-slate-400 font-medium italic text-xs">
                              <ChevronRight className="w-3 h-3 text-orange-500 shrink-0" />
                              <span>{explicacao.trim()}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* EXERCÍCIOS */}
      {exercises.length > 0 && (
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-2">
            <BrainCircuit className="text-orange-600" /> Desafios
          </h2>
          <div className="grid gap-6">
            {exercises.map((ex) => {
              const status = exerciseStatus[ex.id] || 'idle';
              return (
                <Card key={ex.id} className="border-none rounded-[2rem] overflow-hidden shadow-lg">
                  <CardContent className="p-8 space-y-6 bg-white border-b-4 border-slate-50">
                    <p className="text-lg font-bold text-slate-800">{ex.pergunta}</p>
                    <Input 
                      placeholder="Resposta..."
                      className="bg-slate-50 border-none focus:ring-2 focus:ring-orange-200 p-6 text-lg font-bold rounded-xl"
                      onChange={(e) => setAnswers({...answers, [ex.id]: e.target.value})}
                    />
                    <Button 
                      onClick={() => handleCheckAnswer(ex.id, ex.resposta_esperada)}
                      className={`w-full font-black text-base py-8 rounded-xl transition-all duration-300 uppercase tracking-widest ${
                        status === 'success' ? 'bg-green-600 text-white' : 
                        status === 'error' ? 'bg-red-600 text-white' : 'bg-slate-900 text-white hover:bg-orange-600'
                      }`}
                    >
                      {status === 'success' ? 'CORRETO! 🎉' : status === 'error' ? 'TENTE NOVAMENTE! ❌' : 'VERIFICAR'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* NAVEGAÇÃO */}
      <div className="flex flex-col md:flex-row justify-between gap-4 border-t border-slate-100 pt-10">
        <Button onClick={() => navigate(`/Curso/${lessonId - 1}`)} disabled={lessonId <= 1} variant="outline" className="flex-1 py-8 rounded-2xl font-black text-slate-400">← ANTERIOR</Button>
        <Button onClick={() => navigate(`/Curso/${lessonId + 1}`)} className="flex-1 py-8 rounded-2xl bg-orange-600 text-white font-black shadow-lg">PRÓXIMA LIÇÃO →</Button>
      </div>
    </div>
  );
};

export default Curso;
