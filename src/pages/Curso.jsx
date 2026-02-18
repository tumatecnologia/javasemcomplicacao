import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Code } from 'lucide-react';

const Curso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        navigate('/Login');
        return;
      }

      setLoading(true);
      // Tentativa de busca ultra-direta
      const { data, error } = await supabase
        .from('aulas')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        console.error("Erro Supabase:", error);
      }

      if (data) {
        setLesson(data);
      } else {
        console.log("Aula não encontrada para o ID:", id);
      }
      setLoading(false);
    };

    fetchData();
  }, [id, user, navigate]);

  if (loading) return <div className="p-20 text-center font-bold text-orange-600 animate-bounce">Carregando aula...</div>;
  
  if (!lesson) return (
    <div className="p-20 text-center">
      <h2 className="text-xl font-bold">Aula não encontrada (ID: {id})</h2>
      <Button onClick={() => navigate('/Inicio')} className="mt-4">Voltar ao Início</Button>
    </div>
  );

  return (
    <div className="container mx-auto py-6 max-w-4xl px-4">
      <Button variant="ghost" onClick={() => navigate('/Inicio')} className="mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="h-2 bg-orange-500" />
        <div className="p-6 md:p-10">
          <div className="flex justify-between items-center mb-4">
             <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
               Módulo {lesson.modulo}
             </span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-6">{lesson.título}</h1>
          <div className="prose max-w-none text-slate-700 leading-relaxed text-lg whitespace-pre-wrap">
            {lesson.conteudo}
          </div>
          {lesson.exemplo_codigo && (
            <div className="mt-8 bg-slate-900 rounded-xl p-6">
              <div className="flex items-center gap-2 text-orange-400 mb-4 font-mono text-sm uppercase">
                <Code size={18} /> Exemplo de Código
              </div>
              <pre className="text-orange-200 font-mono text-sm overflow-x-auto">
                <code>{lesson.exemplo_codigo}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Curso;
