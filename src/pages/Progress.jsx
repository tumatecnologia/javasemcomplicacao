cat <<'EOF' > src/pages/Progress.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/AuthContext";
import { 
  BookOpen, CheckCircle, Star, TrendingUp, Target,
  Loader2, BarChart3
} from "lucide-react";

export default function Progress() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalAulas: 0,
    concluidas: 0,
    media: 0,
    exerciciosCont: 0
  });
  const [recentExercises, setRecentExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;
      setLoading(true);

      try {
        // 1. Buscar total de aulas cadastradas no banco
        const { count: total } = await supabase
          .from('aulas')
          .select('*', { count: 'exact', head: true });

        // 2. Buscar progresso do usuário (tabela progresso_usuario)
        const { data: userProgs } = await supabase
          .from('progresso_usuario')
          .select('*')
          .eq('user_email', user.email);

        // 3. Buscar exercícios recentes
        const { data: exs } = await supabase
          .from('progresso_usuario')
          .select('*, aulas(titulo)')
          .eq('user_email', user.email)
          .order('id', { ascending: false })
          .limit(10);

        if (userProgs) {
          const concluidas = userProgs.filter(p => p.status === 'passed').length;
          const mediaTotal = userProgs.reduce((acc, curr) => acc + (curr.nota || 0), 0) / (userProgs.length || 1);
          
          setStats({
            totalAulas: total || 0,
            concluidas: concluidas,
            media: mediaTotal,
            exerciciosCont: userProgs.length
          });
        }
        setRecentExercises(exs || []);
      } catch (error) {
        console.error("Erro ao carregar progresso:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  const overallProgress = stats.totalAulas > 0 ? (stats.concluidas / stats.totalAulas) * 100 : 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Meu Progresso</h1>
        <p className="text-slate-500 mt-1">Acompanhe sua evolução, {user?.email}</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Progresso Geral", value: `${Math.round(overallProgress)}%`, icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-50" },
          { label: "Aulas Concluídas", value: `${stats.concluidas}/${stats.totalAulas}`, icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Nota Média", value: stats.media.toFixed(1), icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
          { label: "Exercícios", value: stats.exerciciosCont, icon: Target, color: "text-green-500", bg: "bg-green-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Barra de Progresso */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
        <h2 className="font-semibold text-lg text-slate-900 mb-4">Progresso do Curso</h2>
        <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-700"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-slate-500 mt-2">
          <span>{stats.concluidas} de {stats.totalAulas} aulas concluídas</span>
          <span>{Math.round(overallProgress)}%</span>
        </div>
      </div>

      {/* Lista de Atividades Recentes */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
        <h2 className="font-semibold text-lg text-slate-900 mb-4">Últimas Atividades</h2>
        <div className="space-y-3">
          {recentExercises.length === 0 ? (
            <p className="text-sm text-slate-400 text-center py-8">Nenhuma atividade registrada ainda.</p>
          ) : (
            recentExercises.map(ex => (
              <div key={ex.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div className="flex items-center gap-3 min-w-0">
                  {ex.status === "passed" ? (
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <BarChart3 className="w-4 h-4 text-red-400 shrink-0" />
                  )}
                  <span className="text-sm text-slate-700 truncate">
                    {ex.aulas?.titulo || `Aula ${ex.aula_id}`}
                  </span>
                </div>
                <span className={`text-sm font-semibold ml-2 shrink-0 ${ex.nota >= 7 ? "text-green-600" : "text-red-500"}`}>
                  Nota: {ex.nota?.toFixed(1)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
EOF