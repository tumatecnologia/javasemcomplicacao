import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo8 = [
  {
    id: 71, modulo: 8, titulo: "O que são Exceções?",
    teoria: "Exceções são eventos que interrompem o fluxo normal do programa. No Java, uma exceção é um objeto que descreve um erro ocorrido num método.",
    exemplo_codigo: "// Erro comum: Divisão por zero \nint x = 10 / 0;",
    exemplo_explicado: ["Exception: Erro em tempo de execução.", "Objeto: Toda exceção é uma instância de uma classe.", "Throwable: A classe pai de todos os erros."],
    exercicios: [
      { tipo: "completar", pergunta: "Erros em tempo de execução são ____.", resposta: "exceções" },
      { tipo: "completar", pergunta: "A classe base de erros é a ____.", resposta: "Throwable" },
      { tipo: "completar", pergunta: "Exceções são tratadas como ____.", resposta: "objetos" },
      { tipo: "completar", pergunta: "Quando ocorre um erro, o Java ____ uma exceção.", resposta: "lança" },
      { tipo: "completar", pergunta: "Divisão por zero gera Arithmetic____.", resposta: "Exception" },
      { tipo: "escrever", pergunta: "Nome do erro de execução:", resposta: "Exception" }
    ]
  },
  {
    id: 72, modulo: 8, titulo: "Bloco try-catch",
    teoria: "Usamos o 'try' (tentar) para envolver o código perigoso e o 'catch' (capturar) para lidar com o erro se ele ocorrer.",
    exemplo_codigo: "try { \n  int x = 10/0; \n} catch (Exception e) { \n  System.out.println(\"Erro!\"); \n}",
    exemplo_explicado: ["try: Bloco vigiado.", "catch: Bloco de tratamento.", "e: Variável que guarda os detalhes do erro."],
    exercicios: [
      { tipo: "completar", pergunta: "Para tentar um código usamos ____.", resposta: "try" },
      { tipo: "completar", pergunta: "Para capturar o erro usamos ____.", resposta: "catch" },
      { tipo: "completar", pergunta: "O catch só executa se houver ____.", resposta: "erro" },
      { tipo: "completar", pergunta: "try { } ____ (Exception e) { }", resposta: "catch" },
      { tipo: "completar", pergunta: "Devemos colocar apenas o código ____ no try.", resposta: "perigoso" },
      { tipo: "escrever", pergunta: "Comando de captura:", resposta: "catch" }
    ]
  },
  {
    id: 73, modulo: 8, titulo: "Bloco finally",
    teoria: "O bloco 'finally' é executado SEMPRE, ocorrendo um erro ou não. Ideal para fechar ficheiros ou conexões com o banco.",
    exemplo_codigo: "try { ... } finally { \n  System.out.println(\"Sempre executa\"); \n}",
    exemplo_explicado: ["Garantia: Executa mesmo com return dentro do try.", "Limpeza: Usado para libertar recursos.", "Opcional: Pode haver try-catch sem finally."],
    exercicios: [
      { tipo: "completar", pergunta: "O bloco que sempre executa é o ____.", resposta: "finally" },
      { tipo: "completar", pergunta: "finally é usado para ____ de recursos.", resposta: "limpeza" },
      { tipo: "completar", pergunta: "O finally vem ____ do catch.", resposta: "depois" },
      { tipo: "completar", pergunta: "Executa mesmo se houver um ____.", resposta: "erro" },
      { tipo: "completar", pergunta: "try { } finally { ____ }", resposta: "fechar" },
      { tipo: "escrever", pergunta: "Bloco de execução garantida:", resposta: "finally" }
    ]
  },
  {
    id: 74, modulo: 8, titulo: "Lançando Exceções (throw)",
    teoria: "Podemos forçar o lançamento de uma exceção usando a palavra 'throw' seguida de uma nova instância de exceção.",
    exemplo_codigo: "if (idade < 0) throw new IllegalArgumentException();",
    exemplo_explicado: ["throw: 'Lançar' manualmente.", "new: Cria o objeto do erro.", "Controle: Valida regras de negócio."],
    exercicios: [
      { tipo: "completar", pergunta: "Para lançar um erro usamos ____.", resposta: "throw" },
      { tipo: "completar", pergunta: "Lançamos uma ____ instância de erro.", resposta: "nova" },
      { tipo: "completar", pergunta: "throw new ____(); // erro generico", resposta: "Exception" },
      { tipo: "completar", pergunta: "O throw interrompe o ____ atual.", resposta: "método" },
      { tipo: "completar", pergunta: "Usamos throw para indicar dados ____.", resposta: "inválidos" },
      { tipo: "escrever", pergunta: "Palavra para lançar erro:", resposta: "throw" }
    ]
  },
  {
    id: 75, modulo: 8, titulo: "Assinatura throws",
    teoria: "Se um método pode lançar uma exceção e não a trata, ele deve avisar na assinatura usando 'throws'.",
    exemplo_codigo: "void lerArquivo() throws IOException { ... }",
    exemplo_explicado: ["throws: Avisa que o método é perigoso.", "Responsabilidade: Quem chama o método deve tratar o erro.", "Check: Obrigatório para exceções verificadas."],
    exercicios: [
      { tipo: "completar", pergunta: "Aviso na assinatura usa ____ (no plural).", resposta: "throws" },
      { tipo: "completar", pergunta: "throws delega a ____ do erro.", resposta: "responsabilidade" },
      { tipo: "completar", pergunta: "Vem depois dos ____ do método.", resposta: "parênteses" },
      { tipo: "completar", pergunta: "void m() ____ Exception { }", resposta: "throws" },
      { tipo: "completar", pergunta: "Indica que o método pode ____.", resposta: "falhar" },
      { tipo: "escrever", pergunta: "Palavra de aviso no método:", resposta: "throws" }
    ]
  },
  {
    id: 76, modulo: 8, titulo: "Checked vs Unchecked",
    teoria: "Checked: O compilador obriga-te a tratar (ex: IOException). Unchecked: Erros de lógica que não precisam de tratamento obrigatório (ex: NullPointerException).",
    exemplo_codigo: "// Unchecked: RuntimeException \n// Checked: Exception",
    exemplo_explicado: ["Checked: Herdam de Exception.", "Unchecked: Herdam de RuntimeException.", "Compilador: Verifica as Checked."],
    exercicios: [
      { tipo: "completar", pergunta: "Exceções obrigatórias são ____.", resposta: "checked" },
      { tipo: "completar", pergunta: "Exceções de lógica são ____.", resposta: "unchecked" },
      { tipo: "completar", pergunta: "RuntimeException é do tipo ____.", resposta: "unchecked" },
      { tipo: "completar", pergunta: "Ficheiros usam exceções ____.", resposta: "checked" },
      { tipo: "completar", pergunta: "Checked exige try ou ____.", resposta: "throws" },
      { tipo: "escrever", pergunta: "Tipo obrigatório:", resposta: "checked" }
    ]
  },
  {
    id: 77, modulo: 8, titulo: "Exceções Personalizadas",
    teoria: "Podes criar as tuas próprias classes de erro herdando de Exception ou RuntimeException.",
    exemplo_codigo: "class SaldoInsuficienteException extends Exception {}",
    exemplo_explicado: ["Herança: Cria erros específicos para a tua app.", "Clareza: Torna o erro mais fácil de entender.", "Uso: throw new MinhaExceção();"],
    exercicios: [
      { tipo: "completar", pergunta: "Exceção própria deve ____ Exception.", resposta: "herdar" },
      { tipo: "completar", pergunta: "Traz mais ____ ao erro.", resposta: "contexto" },
      { tipo: "completar", pergunta: "class Erro ____ Exception { }", resposta: "extends" },
      { tipo: "completar", pergunta: "Usamos o sufixo ____ no nome.", resposta: "Exception" },
      { tipo: "completar", pergunta: "Permite capturar erros de ____.", resposta: "negócio" },
      { tipo: "escrever", pergunta: "Palavra para criar herança:", resposta: "extends" }
    ]
  },
  {
    id: 78, modulo: 8, titulo: "Multi-catch",
    teoria: "Um único bloco try pode ter vários catchs para tratar diferentes tipos de erro de forma específica.",
    exemplo_codigo: "try { ... } catch (ArithmeticException e) { ... } catch (NullPointerException e) { ... }",
    exemplo_explicado: ["Ordem: Do mais específico para o mais genérico.", "Especifidade: Trata cada erro de uma forma.", "Captura: Apenas um catch é executado."],
    exercicios: [
      { tipo: "completar", pergunta: "Podemos ter ____ catchs para um try.", resposta: "vários" },
      { tipo: "completar", pergunta: "A ordem deve ser do erro mais ____ primeiro.", resposta: "específico" },
      { tipo: "completar", pergunta: "Exception (pai) deve ser o ____ catch.", resposta: "último" },
      { tipo: "completar", pergunta: "Apenas ____ bloco catch será rodado.", resposta: "um" },
      { tipo: "completar", pergunta: "Melhora o ____ de erros.", resposta: "diagnóstico" },
      { tipo: "escrever", pergunta: "Múltiplos tratamentos:", resposta: "multi-catch" }
    ]
  },
  {
    id: 79, modulo: 8, titulo: "Stack Trace",
    teoria: "O rasto do erro. Mostra a sequência de métodos que foram chamados até chegar à linha que falhou.",
    exemplo_codigo: "e.printStackTrace();",
    exemplo_explicado: ["print: Mostra o erro no console.", "Trace: Caminho do erro.", "Debugging: Essencial para achar o bug."],
    exercicios: [
      { tipo: "completar", pergunta: "O rasto do erro é o ____ trace.", resposta: "stack" },
      { tipo: "completar", pergunta: "Método para imprimir rasto: print____Trace().", resposta: "Stack" },
      { tipo: "completar", pergunta: "Mostra a ____ onde o erro ocorreu.", resposta: "linha" },
      { tipo: "completar", pergunta: "Ajuda na fase de ____.", resposta: "debug" },
      { tipo: "completar", pergunta: "e.getMessage() pega a ____ de erro.", resposta: "mensagem" },
      { tipo: "escrever", pergunta: "Rasto do erro:", resposta: "stack trace" }
    ]
  },
  {
    id: 80, modulo: 8, titulo: "Revisão de Exceções",
    teoria: "Dominamos try, catch, finally, throw, throws e a hierarquia de erros do Java.",
    exemplo_codigo: "// Módulo 8 Concluído!",
    exemplo_explicado: ["Erros: Tratados.", "App: Estável.", "Próximo: Collections Framework."],
    exercicios: [
      { tipo: "completar", pergunta: "Tentar: ____.", resposta: "try" },
      { tipo: "completar", pergunta: "Capturar: ____.", resposta: "catch" },
      { tipo: "completar", pergunta: "Sempre roda: ____.", resposta: "finally" },
      { tipo: "completar", pergunta: "Lançar: ____.", resposta: "throw" },
      { tipo: "completar", pergunta: "Avisar: ____.", resposta: "throws" },
      { tipo: "escrever", pergunta: "Erro imprevisto:", resposta: "Exception" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 8 para o Supabase...");
  for (const aula of modulo8) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m8a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 8 Finalizado!");
}
semear();