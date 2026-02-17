import { createClient } from '@supabase/supabase-js';

// Credenciais confirmadas
const SUPABASE_URL = 'https://xwxkclrsbdozooqgfvnc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const modulo1_completo = [
  { id: 1, modulo: 1, titulo: "O que é Java?", teoria: "Java é uma linguagem de alto nível, robusta e orientada a objetos. Criada pela Sun Microsystems, o seu grande diferencial é a portabilidade: 'Write Once, Run Anywhere'.", exemplo_codigo: "public class OlaMundo { \n  // O código Java corre na JVM\n}", exemplo_explicado: ["public: Torna a classe visível.", "class: Palavra para criar classe.", "OlaMundo: Nome da classe.", "//: Comentário."], exercicios: [{ tipo: "completar", pergunta: "O lema do Java é 'Write Once, Run ____'.", resposta: "Anywhere" }, { tipo: "completar", pergunta: "Java é orientada a ____.", resposta: "objetos" }, { tipo: "completar", pergunta: "A sigla da Máquina Virtual Java é ____.", resposta: "JVM" }, { tipo: "completar", pergunta: "Java é linguagem de ____ nível.", resposta: "alto" }, { tipo: "completar", pergunta: "Criado pela ____ Microsystems.", resposta: "Sun" }, { tipo: "escrever", pergunta: "Dona atual do Java:", resposta: "Oracle" }] },
  { id: 2, modulo: 1, titulo: "Ambiente de Desenvolvimento Java", teoria: "Ciclo: Edição (.java), Compilação (.class), Carregamento, Verificação e Execução pela JVM.", exemplo_codigo: "javac Programa.java \njava Programa", exemplo_explicado: ["javac: Compilador.", "Programa.java: Fonte.", "java: Executa JVM.", "bytecode: Código da máquina virtual."], exercicios: [{ tipo: "completar", pergunta: "Código fonte tem extensão .____", resposta: "java" }, { tipo: "completar", pergunta: "O comando para compilar é o ____.", resposta: "javac" }, { tipo: "completar", pergunta: "Código compilado tem extensão .____", resposta: "class" }, { tipo: "completar", pergunta: "JVM lê o código chamado ____.", resposta: "bytecode" }, { tipo: "completar", pergunta: "Fase que coloca na memória: ____.", resposta: "Carregamento" }, { tipo: "escrever", pergunta: "Comando que inicia a JVM:", resposta: "java" }] },
  { id: 3, modulo: 1, titulo: "Como instalar o Java?", teoria: "Para programar, precisas do JDK. O JRE serve apenas para utilizadores finais.", exemplo_codigo: "java -version", exemplo_explicado: ["java: Execução.", "-version: Ver versão.", "JDK: Kit do desenvolvedor."], exercicios: [{ tipo: "completar", pergunta: "Para programar, instalamos o ____.", resposta: "JDK" }, { tipo: "completar", pergunta: "Para apenas executar, basta o ____.", resposta: "JRE" }, { tipo: "completar", pergunta: "JDK significa Java ____ Kit.", resposta: "Development" }, { tipo: "completar", pergunta: "Variável de ambiente: JAVA_____.", resposta: "HOME" }, { tipo: "completar", pergunta: "Versões de suporte longo: ____.", resposta: "LTS" }, { tipo: "escrever", pergunta: "Comando para ver a versão:", resposta: "java -version" }] },
  { id: 4, modulo: 1, titulo: "Ambiente de teste (JShell)", teoria: "O JShell (REPL) permite testar código Java rapidamente sem criar classes.", exemplo_codigo: "jshell> int x = 10;", exemplo_explicado: ["jshell: Ambiente interativo.", "int x: Variável no shell.", "/exit: Sair."], exercicios: [{ tipo: "completar", pergunta: "JShell é ambiente tipo ____.", resposta: "REPL" }, { tipo: "completar", pergunta: "No JShell, ponto e vírgula é ____.", resposta: "opcional" }, { tipo: "completar", pergunta: "Para sair do JShell: /____.", resposta: "exit" }, { tipo: "completar", pergunta: "JShell lançado no Java ____.", resposta: "9" }, { tipo: "completar", pergunta: "Comando para ver variáveis: /____.", resposta: "vars" }, { tipo: "escrever", pergunta: "Comando para entrar no shell:", resposta: "jshell" }] },
  { id: 5, modulo: 1, titulo: "Java: Case Sensitive", teoria: "Java diferencia maiúsculas de minúsculas. 'Soma' é diferente de 'soma'.", exemplo_codigo: "int x = 1; \nint X = 2;", exemplo_explicado: ["int x: Variável minúscula.", "int X: Outra variável.", "Erro: Chamar 'Public' em vez de 'public'."], exercicios: [{ tipo: "completar", pergunta: "Java é ____ sensitive.", resposta: "case" }, { tipo: "completar", pergunta: "A palavra 'public' é ____.", resposta: "minúscula" }, { tipo: "completar", pergunta: "Se arquivo é Ola.java, classe é ____.", resposta: "Ola" }, { tipo: "completar", pergunta: "No Java, 'Main' igual 'main'? (Sim/Não)", resposta: "Não" }, { tipo: "completar", pergunta: "Erros de caixa geram falha na ____.", resposta: "compilação" }, { tipo: "escrever", pergunta: "Escreva 'public class' corretamente:", resposta: "public class" }] },
  { id: 6, modulo: 1, titulo: "Regras para nomear objetos", teoria: "Classes: PascalCase. Variáveis/Métodos: camelCase. Proibido espaços ou começar com números.", exemplo_codigo: "class ContaBancaria { \n  int saldoInicial; \n}", exemplo_explicado: ["ContaBancaria: PascalCase.", "saldoInicial: camelCase.", "{ }: Delimitam código."], exercicios: [{ tipo: "completar", pergunta: "Classes começam com letra ____.", resposta: "maiúscula" }, { tipo: "completar", pergunta: "Variáveis começam com letra ____.", resposta: "minúscula" }, { tipo: "completar", pergunta: "Padrão para métodos: ____Case.", resposta: "camel" }, { tipo: "completar", pergunta: "Nomes não podem conter ____.", resposta: "espaços" }, { tipo: "completar", pergunta: "Nomes não podem começar com ____.", resposta: "números" }, { tipo: "escrever", pergunta: "Nome para 'Preço Final':", resposta: "precoFinal" }] },
  { id: 7, modulo: 1, titulo: "O que é Compilar?", teoria: "Processo de transformar código .java em código de máquina virtual (.class / Bytecode).", exemplo_codigo: "javac Aula.java", exemplo_explicado: ["javac: Ferramenta tradução.", "Aula.java: Fonte.", ".class: Resultado JVM."], exercicios: [{ tipo: "completar", pergunta: "Compilamos usando o comando ____.", resposta: "javac" }, { tipo: "completar", pergunta: "O resultado é ficheiro .____", resposta: "class" }, { tipo: "completar", pergunta: "Bytecode é para a ____.", resposta: "JVM" }, { tipo: "completar", pergunta: "Compilar traduz alto nível para ____.", resposta: "bytecode" }, { tipo: "completar", pergunta: "Erros de escrita barram a ____.", resposta: "compilação" }, { tipo: "escrever", pergunta: "Extensão após javac:", resposta: ".class" }] },
  { id: 8, modulo: 1, titulo: "O que é Debuggar?", teoria: "Encontrar e remover bugs. Breakpoints param o código para analisar variáveis.", exemplo_codigo: "// Breakpoint aqui", exemplo_explicado: ["Breakpoint: Interrupção.", "Debug: Investigação.", "Step Over: Avançar linha."], exercicios: [{ tipo: "completar", pergunta: "Erros no código são ____.", resposta: "bugs" }, { tipo: "completar", pergunta: "Remover erros é ____.", resposta: "debugar" }, { tipo: "completar", pergunta: "Ponto de paragem é o ____.", resposta: "breakpoint" }, { tipo: "completar", pergunta: "Debug permite seguir passo a ____.", resposta: "passo" }, { tipo: "completar", pergunta: "IDE significa Ambiente Integrado de ____.", resposta: "Desenvolvimento" }, { tipo: "escrever", pergunta: "Ferramenta para achar erros:", resposta: "debugger" }] },
  { id: 9, modulo: 1, titulo: "Grupos de Estudos e Apoios", teoria: "Documentação oficial da Oracle e Stack Overflow são fundamentais.", exemplo_codigo: "https://docs.oracle.com/en/java/", exemplo_explicado: ["Docs: Fonte oficial.", "Stack Overflow: Dúvidas.", "GitHub: Códigos."], exercicios: [{ tipo: "completar", pergunta: "Manual oficial é API ____.", resposta: "Docs" }, { tipo: "completar", pergunta: "Empresa documentação: ____.", resposta: "Oracle" }, { tipo: "completar", pergunta: "Site para dúvidas: Stack ____.", resposta: "Overflow" }, { tipo: "completar", pergunta: "Hospedagem código: ____.", resposta: "GitHub" }, { tipo: "completar", pergunta: "Fórum brasileiro: ____.", resposta: "GUJ" }, { tipo: "escrever", pergunta: "Site suporte oficial:", resposta: "Oracle" }] },
  { id: 10, modulo: 1, titulo: "Revisão do Módulo", teoria: "Nascimento do Java, JVM, instalação do JDK, compilador javac e nomenclatura.", exemplo_codigo: "public class Revisao { }", exemplo_explicado: ["Revisão: Consolidação.", "Modulo 1: Concluído.", "Próximo: Entrada/Saída."], exercicios: [{ tipo: "completar", pergunta: "Java roda em qualquer lugar com ____.", resposta: "JVM" }, { tipo: "completar", pergunta: "JDK é para ____.", resposta: "desenvolver" }, { tipo: "completar", pergunta: "Compilamos para .____", resposta: "class" }, { tipo: "completar", pergunta: "Classes usam Início ____.", resposta: "Maiúsculo" }, { tipo: "completar", pergunta: "Java diferencia letras: ____ Sensitive.", resposta: "Case" }, { tipo: "escrever", pergunta: "Código que a JVM lê:", resposta: "bytecode" }] }
];

async function semear() {
  console.log("🚀 Enviando Módulo 1 para o Supabase...");
  for (const aula of modulo1_completo) {
    const { data: aulaData, error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id,
        modulo: aula.modulo,
        titulo: aula.titulo,
        conteudo: aula.teoria,
        exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado,
        is_free: true
      }).select();

    if (aulaError) {
      console.error("❌ Erro aula " + aula.id, aulaError);
      continue;
    }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m1a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    const { error: exError } = await supabase.from('exercicios').upsert(exs);
    if (exError) console.error("❌ Erro ex aula " + aula.id, exError);
    else console.log("✅ Aula " + aula.id + " OK");
  }
}
semear();
