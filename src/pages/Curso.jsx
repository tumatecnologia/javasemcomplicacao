cat <<'EOF' > src/pages/Curso.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { isLessonFree, checkPremiumStatus } from '@/services/paymentControl';
import { ChevronLeft, Code, BookOpen } from 'lucide-react';

const Curso = () => {
  const { id } = useParams(); // Pega o ID da aula pela URL
  const lessonId = parseInt(id) || 1;
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // 1. Verificação de Acesso (Gratuito vs Premium)
      const { data: premiumCheck } = await checkPremiumStatus(user?.email);
      const isFree = isLessonFree(lessonId);

      if (!isFree && !premiumCheck) {
        toast({ 
          title: "Acesso Premium", 
          description: "Esta aula é exclusiva para membros Premium.", 
          variant: "destructive" 
        });
        navigate('/Premium');
        return;
      }

      // 2. Buscar dados reais na tabela 'aulas'
      const { data, error } = await supabase
        .from('aulas')
        .select('*')
        .eq('id', lessonId)
        .single();

      if (error) {
        toast({ title: "Erro", description: "Aula não encontrada.", variant: "destructive" });
        navigate('/Inicio');
      } else {
        setLesson(data);
      }
      setLoading(false);
    };

    if (user) loadData();
    else navigate('/Login');
  }, [lessonId, user, navigate]);

  if (loading) return <div className="p-10 text-center animate-pulse">Carregando conteúdo...</div>;
  if (!lesson) return null;

  return (
    <div className="container mx-auto py-6 max-w-4xl space-y-8">
      <Button variant="ghost" onClick={() => navigate('/Inicio')} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para o Início
      </Button>

      <Card className="border-none shadow-lg overflow-hidden">
        <div className="h-2 bg-orange-500" />
        <CardHeader>
          <div className="flex justify-between items-center">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest">Módulo {lesson.modulo}</span>
            {lesson.is_free && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">Gratuita</span>}
          </div>
          <CardTitle className="text-3xl font-extrabold text-slate-800">{lesson.titulo}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose max-w-none text-slate-700 leading-relaxed text-lg">
            {lesson.conteudo}
          </div>

          {lesson.exemplo_codigo && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <Code className="w-5 h-5" />
                <span>Exemplo Prático (Java)</span>
              </div>
              <pre className="bg-slate-900 text-orange-300 p-6 rounded-2xl overflow-x-auto font-mono text-sm shadow-xl">
                <code>{lesson.exemplo_codigo}</code>
              </pre>
            </div>
          )}

          {lesson.exemplo_explicado && (
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Explicação do Código
              </h4>
              <p className="text-blue-800 italic">{lesson.exemplo_explicado}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between gap-4">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/Curso/${lessonId - 1}`)}
          disabled={lessonId <= 1}
          className="w-full"
        >
          Aula Anterior
        </Button>
        <Button 
          onClick={() => navigate(`/Curso/${lessonId + 1}`)}
          className="w-full bg-orange-600 hover:bg-orange-700"
        >
          Próxima Aula
        </Button>
      </div>
    </div>
  );
};

export default Curso;
EOF