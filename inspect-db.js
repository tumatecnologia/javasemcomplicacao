import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

// Tenta carregar as chaves do arquivo .env ou .env.local
const envFile = fs.existsSync('.env.local') ? '.env.local' : '.env';
dotenv.config({ path: envFile });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Erro: VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não encontradas no seu .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspect() {
  console.log("🔍 Conectando ao Supabase...");
  
  // Tenta listar as tabelas verificando primeiro a de 'modulos' que é a base do curso
  const { data: modulos, error: errMod } = await supabase.from('modulos').select('*').limit(1);
  
  if (errMod) {
    console.log("❌ Tabela 'modulos' não encontrada ou erro:", errMod.message);
  } else {
    console.log("✅ Tabela 'modulos' existe!");
    console.log("Colunas disponíveis:", Object.keys(modulos[0] || {}));
  }

  // Tenta verificar se existe uma tabela de progresso/users
  const { data: prog, error: errProg } = await supabase.from('progresso').select('*').limit(1);
  if (errProg) {
    console.log("⚠️ Tabela 'progresso' não encontrada. Talvez tenha outro nome?");
  } else {
    console.log("✅ Tabela 'progresso' existe!");
  }
}

inspect();
