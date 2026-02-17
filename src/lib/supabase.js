import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xwxcclrsbdozooqgfvnc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM';

export const supabase = createClient(supabaseUrl, supabaseKey);

// --- FUNÇÕES DE PAGAMENTO ---

export const checkTransactionId = async (transactionId) => {
  const { data, error } = await supabase
    .from('transacoes_premium')
    .select('id_transacao')
    .eq('id_transacao', transactionId)
    .single();

  if (error && error.code !== 'PGRST116') return true;
  return !!data;
};

export const saveTransaction = async (transactionId, userEmail, generatedCode) => {
  const { error } = await supabase
    .from('transacoes_premium')
    .insert([
      { 
        id_transacao: transactionId, 
        email_usuario: userEmail, 
        codigo_gerado: generatedCode,
        data_ativacao: new Date()
      }
    ]);
  return !error;
};

// --- FUNÇÕES DE PROGRESSO ---

export const saveExerciseScore = async (userEmail, exerciseId, score) => {
  const status = score >= 7 ? 'passed' : 'failed';
  const { error } = await supabase
    .from('progresso_usuario')
    .upsert({
      user_email: userEmail,
      exercicio_id: exerciseId,
      nota: score,
      status: status
    });
  return !error;
};
