import { supabase } from "@/lib/supabase";

export const isLessonFree = (lessonId) => {
  // Módulos 1 e 2 (IDs de aula 1 a 20)
  return lessonId <= 20;
};

export const checkPremiumStatus = async (email) => {
  if (!email) return { data: false };

  // Verifica se o usuário tem uma transação registrada
  const { data, error } = await supabase
    .from("transacoes_premium")
    .select("*")
    .eq("email_usuario", email);

  // Se houver qualquer registro para este email, ele é Premium
  if (data && data.length > 0) return { data: true };
  
  return { data: false };
};