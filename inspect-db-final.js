import { createClient } from '@supabase/supabase-js';

// Usando os dados fornecidos
const supabaseUrl = 'https://xwxkclrsbdozooqgfvnc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspect() {
  console.log("🚀 Iniciando inspeção completa do banco...");
  
  // Teste Módulos
  const { data: mod, error: e1 } = await supabase.from('modulos').select('*').limit(1);
  if (e1) console.log("❌ Tabela 'modulos':", e1.message);
  else console.log("✅ Tabela 'modulos' OK! Colunas:", Object.keys(mod[0] || {}));

  // Teste Progresso
  const { data: pro, error: e2 } = await supabase.from('progresso').select('*').limit(1);
  if (e2) console.log("❌ Tabela 'progresso':", e2.message);
  else console.log("✅ Tabela 'progresso' OK! Colunas:", Object.keys(pro[0] || {}));

  // Teste Aulas
  const { data: aul, error: e3 } = await supabase.from('aulas').select('*').limit(1);
  if (e3) console.log("❌ Tabela 'aulas':", e3.message);
  else console.log("✅ Tabela 'progresso' OK! Colunas:", Object.keys(aul[0] || {}));
}

inspect();
