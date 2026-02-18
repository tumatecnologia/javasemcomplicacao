import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xwxkclrsbdozooqgfvnc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const checkTransactionId = async (code) => {
  // NOVO CÓDIGO DO ADMINISTRADOR
  if (code === "234445543") return true;

  const { data, error } = await supabase
    .from("transacoes_premium")
    .select("id_transacao")
    .eq("id_transacao", code)
    .single();

  return !!data && !error;
};

export const saveTransaction = async (id, email, code) => {
  const { error } = await supabase
    .from("transacoes_premium")
    .insert([{ id_transacao: id, email_usuario: email, codigo_gerado: code }]);
  return !error;
};