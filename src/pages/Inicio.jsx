import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { 
  Coffee, BookOpen, ChevronRight, 
  Lock, PlayCircle, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Inicio() {
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // 1. Verificar usuário
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/Login");
        return;
      }
      setUser(user);

      // 2. Buscar aulas e agrupar por módulo
      const { data: aulas, error } = await supabase
        .from('aulas')
        .select('modulo, titulo, is_free')
        .order('modulo', { ascending: true });

      if (error) {
        console.error("Erro ao buscar aulas:", error.message);
      } else {
        // Agrupa as aulas por número de módulo para criar os "Cards"
        const agrupados = aulas.reduce((acc, aula) => {
          if (!acc[aula.modulo]) {
            acc[aula.modulo] = { 
              numero: aula.modulo, 
              totalAulas: 0, 
              nome: `Módulo ${aula.modulo}`,
              temGratis: false 
            };
          }
          acc[aula.modulo].totalAulas += 1;
          if (aula.is_free) acc[aula.modulo].temGratis = true;
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
    <div className="space-y-8">
      {/* Header de Boas-vindas */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-lg shadow-orange-200">
        <h1 className="text-3xl font-bold mb-2">Olá, Estudante! ☕</h1>
        <p className="text-orange-100">Selecione um módulo abaixo para continuar seus estudos de Java.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modulos.map((mod) => (
          <div 
            key={mod.numero}
            onClick={() => navigate(`/Curso?modulo=${mod.numero}`)}
            className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-orange-300 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <BookOpen className="h-6 w-6" />
            </div>
            
            <h3 className="mb-1 text-xl font-bold text-slate-800">{mod.nome}</h3>
            <p className="text-sm text-slate-500 mb-4">{mod.totalAulas} aulas disponíveis</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-600">
                {mod.temGratis ? (
                  <><PlayCircle className="w-4 h-4" /> Conteúdo Liberado</>
                ) : (
                  <><Lock className="w-4 h-4 text-slate-400" /> <span className="text-slate-400">Premium</span></>
                )}
              </span>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}