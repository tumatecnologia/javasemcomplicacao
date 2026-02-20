import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xwxkclrsbdozooqgfvnc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const modulo1_melhorado = [
  { 
    id: 1, 
    modulo: 1, 
    titulo: "O que é Java?", 
    teoria: "O Java não é apenas uma linguagem, mas uma plataforma completa. Criado em 1995 pela Sun Microsystems (hoje da Oracle), ele nasceu com o conceito 'WORA' (Write Once, Run Anywhere). \n\nIsso significa que um código escrito no Windows pode rodar no Linux ou num celular Android sem precisar ser reescrito, graças à JVM (Máquina Virtual Java). É uma linguagem orientada a objetos, o que facilita a organização de sistemas grandes e complexos.", 
    exemplo_codigo: "public class OlaMundo { // Define a estrutura principal do seu programa\n  public static void main(String[] args) { // O ponto de partida onde o Java começa a ler\n    System.out.println(\"Java é Portátil!\"); // Comando que exibe uma mensagem na tela\n  } // Fecha o método principal\n} // Fecha a classe OlaMundo", 
    exemplo_explicado: ["Portabilidade: Roda em qualquer sistema com JVM.", "Orientação a Objetos: Organiza o código como no mundo real.", "Segurança: O código é verificado antes de rodar.", "Comunidade: Uma das maiores linguagens do mundo."], 
    exercicios: [
      { tipo: "completar", pergunta: "O lema do Java é 'Write Once, Run ____'.", resposta: "Anywhere" },
      { tipo: "completar", pergunta: "Java é orientada a ____.", resposta: "objetos" },
      { tipo: "completar", pergunta: "A sigla da Máquina Virtual Java é ____.", resposta: "JVM" }
    ] 
  },
  { 
    id: 2, 
    modulo: 1, 
    titulo: "Ambiente e Ciclo de Vida", 
    teoria: "Para o Java funcionar, ele passa por etapas: \n1. Escrita: Você cria o arquivo .java. \n2. Compilação: O 'javac' transforma seu texto em 'Bytecode' (.class). \n3. Execução: A JVM lê esse bytecode e o transforma em ações no seu computador. \n\nO Bytecode é a linguagem mágica que permite que o Java seja portável.", 
    exemplo_codigo: "javac MeuPrograma.java // O comando 'javac' transforma o texto em Bytecode (.class)\njava MeuPrograma // O comando 'java' aciona a JVM para executar o arquivo .class", 
    exemplo_explicado: ["Código Fonte: Arquivo com extensão .java que nós escrevemos.", "Bytecode: Arquivo .class que o computador entende.", "Compilador: O tradutor (javac).", "JVM: A máquina que executa o traduzido."], 
    exercicios: [
      { tipo: "completar", pergunta: "Código fonte tem extensão .____", resposta: "java" },
      { tipo: "completar", pergunta: "O comando para compilar é o ____.", resposta: "javac" },
      { tipo: "completar", pergunta: "JVM lê o código chamado ____.", resposta: "bytecode" }
    ] 
  },
  { 
    id: 5, 
    modulo: 1, 
    titulo: "Java: Case Sensitive", 
    teoria: "Atenção total aqui: o Java é extremamente exigente com letras maiúsculas e minúsculas! \n\nSe você declarar uma variável chamada 'preco' e tentar usar 'Preco', o Java dirá que ela não existe. Isso vale para comandos também: 'Public' com P maiúsculo causará erro, o correto é sempre 'public'.", 
    exemplo_codigo: "int idade = 25; // Variável declarada em minúsculo\nint Idade = 30; // Para o Java, esta é uma variável TOTALMENTE diferente\npublic class Teste { // O comando 'public' deve ser sempre minúsculo", 
    exemplo_explicado: ["Diferenciação: 'A' é diferente de 'a'.", "Comandos: public, class, static devem ser minúsculos.", "Nomes de Classes: Por padrão, começam com Maiúscula.", "Erros: Pequenas variações de caixa quebram o código."], 
    exercicios: [
      { tipo: "completar", pergunta: "Java é ____ sensitive.", resposta: "case" },
      { tipo: "completar", pergunta: "A palavra 'public' é sempre ____.", resposta: "minúscula" },
      { tipo: "escrever", pergunta: "Escreva 'public class' corretamente:", resposta: "public class" }
    ] 
  }
];

// Função de semeadura que envia os dados corrigidos
async function atualizarModulo1() {
  console.log("🛠️ Atualizando Módulo 1 com explicações detalhadas...");
  for (const aula of modulo1_melhorado) {
    const { error } = await supabase.from('aulas').upsert({
      id: aula.id,
      modulo: aula.modulo,
      titulo: aula.titulo,
      conteudo: aula.teoria,
      exemplo_codigo: aula.exemplo_codigo,
      exemplo_explicado: aula.exemplo_explicado,
      is_free: true
    });
    
    if (error) console.error(`❌ Erro na aula ${aula.id}:`, error);
    else console.log(`✅ Aula ${aula.id} atualizada com sucesso!`);
  }
}

atualizarModulo1();