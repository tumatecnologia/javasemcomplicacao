import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { 
  BookOpen, ChevronRight, 
  Lock, PlayCircle, Rocket
} from "lucide-react";

export default function Inicio() {
  const [modulos, setModulos] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("Estudante");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/Login");
        return;
      }
      
      const nomeCadastrado = user.user_metadata?.display_name || "Estudante";
      setUserName(nomeCadastrado);

      // 1. Buscar Todas as Aulas
      const { data: aulas, error } = await supabase
        .from('aulas')
        .select('*')
        .order('id', { ascending: true });

      if (aulas) {
        // FILTRO 1: Módulos de Estudo (Módulos 1 a 10)
        const aulasRegulares = aulas.filter(a => parseInt(a.modulo) < 11);
        const agrupados = aulasRegulares.reduce((acc, aula) => {
          const modNum = parseInt(aula.modulo);
          if (!acc[modNum]) {
            acc[modNum] = { 
              numero: modNum, 
              totalAulas: 0, 
              nome: `Módulo ${modNum}`,
              isLocked: modNum > 2 
            };
          }
          acc[modNum].totalAulas += 1;
          return acc;
        }, {});
        setModulos(Object.values(agrupados));

        // FILTRO 2: Projetos Práticos (Módulo 11)
        const aulasProjetos = aulas.filter(a => parseInt(a.modulo) === 11);
        setProjetos(aulasProjetos);
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
    <div className="space-y-12 px-4 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-3xl p-8 text-white shadow-lg shadow-orange-200">
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Olá, {userName}! ☕</h1>
        <p className="text-orange-100 font-medium">Selecione um conteúdo para continuar seus estudos.</p>
      </div>

      {/* Seção de Módulos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 uppercase tracking-tighter italic">
          <BookOpen className="text-orange-500" /> Módulos de Teoria
        </h2>
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
                  {!mod.isLocked ? <><PlayCircle className="w-4 h-4" /> Liberado</> : <><Lock className="w-4 h-4" /> Premium</>}
                </span>
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Projetos Práticos (Módulo 11) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 uppercase tracking-tighter italic">
          <Rocket className="text-orange-500" /> Projetos de Aplicação (Módulo 11)
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projetos.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => navigate(`/Curso/${proj.id}`)}
              className="group cursor-pointer rounded-2xl border-2 border-slate-100 bg-white p-6 transition-all hover:border-orange-500 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-orange-50 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="flex items-center gap-1 text-[10px] font-black bg-orange-100 text-orange-700 px-2 py-1 rounded">PREMIUM</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase group-hover:text-orange-600 transition-colors line-clamp-1">{proj.titulo}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">{proj.conteudo}</p>
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                 <span className="text-[10px] font-bold text-slate-400">CLIQUE PARA INICIAR</span>
                 <ChevronRight className="h-4 w-4 text-orange-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
