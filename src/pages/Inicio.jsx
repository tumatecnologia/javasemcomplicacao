import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { 
  BookOpen, ChevronRight, 
  Lock, PlayCircle
} from "lucide-react";

export default function Inicio() {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("Estudante");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // 1. Verificar usuário e pegar o nome
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/Login");
        return;
      }
      
      // Pega o nome do metadado (cadastrado no Login)
      const nomeCadastrado = user.user_metadata?.display_name || "Estudante";
      setUserName(nomeCadastrado);

      // 2. Buscar aulas e agrupar por módulo
      const { data: aulas, error } = await supabase
        .from('aulas')
        .select('modulo, titulo, is_free')
        .order('modulo', { ascending: true });

      if (error) {
        console.error("Erro ao buscar aulas:", error.message);
      } else {
        const agrupados = aulas.reduce((acc, aula) => {
          const modNum = parseInt(aula.modulo);
          if (!acc[modNum]) {
            acc[modNum] = { 
              numero: modNum, 
              totalAulas: 0, 
              nome: `Módulo ${modNum}`,
              // Apenas módulos 1 e 2 são considerados livres visualmente
              isLocked: modNum > 2 
            };
          }
          acc[modNum].totalAulas += 1;
          return acc;
        }, {});
        
        setModulos(Object.values(agrupados));
      }
      setLoading(false);
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 px-4">
      {/* Header de Boas-vindas Personalizado */}
      <div className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-3xl p-8 text-white shadow-lg shadow-orange-200">
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Olá, {userName}! ☕</h1>
        <p className="text-orange-100 font-medium">Continue sua jornada para dominar o Java.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modulos.map((mod) => (
          <div 
            key={mod.numero}
            onClick={() => navigate(`/Curso/${mod.numero === 1 ? '1' : mod.numero === 2 ? '11' : '21'}`)} 
            className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-orange-300 hover:shadow-md"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all ${mod.isLocked ? 'bg-slate-100 text-slate-400' : 'bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white'}`}>
              {mod.isLocked ? <Lock className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
            </div>
            
            <h3 className="mb-1 text-xl font-bold text-slate-800">{mod.nome}</h3>
            <p className="text-sm text-slate-500 mb-4">{mod.totalAulas} aulas disponíveis</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className={`flex items-center gap-1.5 text-xs font-bold uppercase ${mod.isLocked ? 'text-slate-400' : 'text-green-600'}`}>
                {!mod.isLocked ? (
                  <><PlayCircle className="w-4 h-4" /> Conteúdo Liberado</>
                ) : (
                  <><Lock className="w-4 h-4" /> Premium</>
                )}
              </span>
              <ChevronRight className={`h-5 w-5 transition-all ${mod.isLocked ? 'text-slate-300' : 'text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
