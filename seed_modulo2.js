import { createClient } from '@supabase/supabase-js';

// Conexão com o banco de dados
const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo2 = [
  {
    id: 11, modulo: 2, titulo: "Saída de Dados (println)",
    teoria: "Para exibir informações no console, usamos o System.out. O 'print' mantém o cursor na mesma linha, enquanto o 'println' pula para a próxima linha.",
    exemplo_codigo: "System.out.println(\"Olá Mundo\"); \nSystem.out.print(\"Sem pular linha\");",
    exemplo_explicado: ["System: Classe do sistema.", "out: Objeto de saída.", "println: Imprime e pula linha.", "print: Imprime sem pular."],
    exercicios: [
      { tipo: "completar", pergunta: "O comando para imprimir e pular linha é ____.", resposta: "println" },
      { tipo: "completar", pergunta: "O objeto de saída padrão é o System.____.", resposta: "out" },
      { tipo: "completar", pergunta: "Textos devem estar entre ____ duplas.", resposta: "aspas" },
      { tipo: "completar", pergunta: "Para não pular linha usamos apenas ____.", resposta: "print" },
      { tipo: "completar", pergunta: "Toda instrução termina com ____.", resposta: ";" },
      { tipo: "escrever", pergunta: "Escreva o comando para imprimir 'Oi':", resposta: "System.out.print(\"Oi\");" }
    ]
  },
  {
    id: 12, modulo: 2, titulo: "Variáveis de Texto (String)",
    teoria: "String não é um tipo primitivo, é uma Classe. Ela armazena sequências de caracteres (textos). Lembre-se: String começa com 'S' maiúsculo.",
    exemplo_codigo: "String nome = \"Gustavo\"; \nSystem.out.println(nome);",
    exemplo_explicado: ["String: Tipo de dado para texto.", "nome: Identificador da variável.", "\"Gustavo\": Valor literal.", "=: Operador de atribuição."],
    exercicios: [
      { tipo: "completar", pergunta: "A palavra String começa com letra ____.", resposta: "maiúscula" },
      { tipo: "completar", pergunta: "Textos são chamados de sequências de ____.", resposta: "caracteres" },
      { tipo: "completar", pergunta: "Para atribuir valor usamos o sinal de ____.", resposta: "=" },
      { tipo: "completar", pergunta: "String é uma ____ e não um tipo primitivo.", resposta: "classe" },
      { tipo: "completar", pergunta: "Variável 'String a' e 'String A' são ____.", resposta: "diferentes" },
      { tipo: "escrever", pergunta: "Declare uma String chamada 'cor' com valor 'azul':", resposta: "String cor = \"azul\";" }
    ]
  },
  {
    id: 13, modulo: 2, titulo: "Números Inteiros (int)",
    teoria: "O tipo 'int' armazena números inteiros (sem casas decimais). É o tipo mais usado para contagens e IDs.",
    exemplo_codigo: "int idade = 25; \nint dobro = idade * 2;",
    exemplo_explicado: ["int: Tipo para números inteiros.", "idade: Nome da variável.", "25: Valor numérico sem aspas.", "*: Operador de multiplicação."],
    exercicios: [
      { tipo: "completar", pergunta: "O tipo para números inteiros é ____.", resposta: "int" },
      { tipo: "completar", pergunta: "Números em variáveis int NÃO usam ____.", resposta: "aspas" },
      { tipo: "completar", pergunta: "O valor máximo de um int é cerca de 2 ____.", resposta: "bilhões" },
      { tipo: "completar", pergunta: "int é um tipo ____ (minúsculo).", resposta: "primitivo" },
      { tipo: "completar", pergunta: "Não podemos colocar 10.5 em um ____.", resposta: "int" },
      { tipo: "escrever", pergunta: "Declare um int 'ano' com valor 2026:", resposta: "int ano = 2026;" }
    ]
  },
  {
    id: 14, modulo: 2, titulo: "Números Decimais (double)",
    teoria: "Para valores com casas decimais (preços, pesos, medidas), usamos o 'double'. No Java, usamos PONTO em vez de vírgula.",
    exemplo_codigo: "double preco = 19.90; \ndouble pi = 3.1415;",
    exemplo_explicado: ["double: Tipo para números reais.", "19.90: Uso do ponto decimal.", "precisao: O double tem alta precisão."],
    exercicios: [
      { tipo: "completar", pergunta: "Para decimais usamos o tipo ____.", resposta: "double" },
      { tipo: "completar", pergunta: "O separador decimal no Java é o ____.", resposta: "ponto" },
      { tipo: "completar", pergunta: "10.0 é considerado do tipo ____.", resposta: "double" },
      { tipo: "completar", pergunta: "O oposto de double com menos precisão é o ____.", resposta: "float" },
      { tipo: "completar", pergunta: "double altura = 1____75;", resposta: "." },
      { tipo: "escrever", pergunta: "Declare um double 'peso' com valor 70.5:", resposta: "double peso = 70.5;" }
    ]
  },
  {
    id: 15, modulo: 2, titulo: "Entrada de Dados (Scanner)",
    teoria: "A classe Scanner permite que o usuário digite dados. Precisamos importar java.util.Scanner para usá-la.",
    exemplo_codigo: "Scanner ler = new Scanner(System.in); \nString nome = ler.nextLine();",
    exemplo_explicado: ["import: Traz a classe para o código.", "new: Cria o objeto Scanner.", "System.in: Entrada padrão (teclado).", "nextLine(): Lê um texto."],
    exercicios: [
      { tipo: "completar", pergunta: "A classe para ler dados chama-se ____.", resposta: "Scanner" },
      { tipo: "completar", pergunta: "Scanner pertence ao pacote java.____.", resposta: "util" },
      { tipo: "completar", pergunta: "Para ler texto usamos o método next____.", resposta: "Line" },
      { tipo: "completar", pergunta: "A entrada do teclado é representada por System.____.", resposta: "in" },
      { tipo: "completar", pergunta: "Precisamos usar a palavra reservada ____ para criar o scanner.", resposta: "new" },
      { tipo: "escrever", pergunta: "Comando para ler um número inteiro:", resposta: "ler.nextInt();" }
    ]
  },
  {
    id: 16, modulo: 2, titulo: "Operadores Matemáticos",
    teoria: "Java usa operadores padrão: + (Soma), - (Subtração), * (Multiplicação) e / (Divisão).",
    exemplo_codigo: "int soma = 10 + 5; \nint resto = 10 % 3;",
    exemplo_explicado: ["+: Soma.", "-: Subtração.", "/: Divisão.", "%: Resto da divisão (módulo)."],
    exercicios: [
      { tipo: "completar", pergunta: "O sinal de multiplicação é o ____.", resposta: "*" },
      { tipo: "completar", pergunta: "O sinal para o resto da divisão é ____.", resposta: "%" },
      { tipo: "completar", pergunta: "10 / 4 em um 'int' resulta em ____.", resposta: "2" },
      { tipo: "completar", pergunta: "A ordem de precedência: * e / vêm ____ de + e -.", resposta: "antes" },
      { tipo: "completar", pergunta: "Para somar 1 à variável usamos o operador ____.", resposta: "++" },
      { tipo: "escrever", pergunta: "Escreva a expressão para 'x' vezes 'y':", resposta: "x * y" }
    ]
  },
  {
    id: 17, modulo: 2, titulo: "Concatenação de Textos",
    teoria: "Concatenar é 'grudar' textos ou variáveis usando o sinal de +. Isso é muito usado para exibir resultados amigáveis.",
    exemplo_codigo: "System.out.println(\"Nome: \" + nome);",
    exemplo_explicado: ["+: Aqui ele junta, não soma matematicamente.", "\"Nome: \": Texto literal.", "nome: Variável concatenada."],
    exercicios: [
      { tipo: "completar", pergunta: "O sinal usado para concatenar é o ____.", resposta: "+" },
      { tipo: "completar", pergunta: "Juntar 'A' com 'B' resulta em '____'.", resposta: "AB" },
      { tipo: "completar", pergunta: "Para dar espaço na junção, usamos \" ____ \".", resposta: " " },
      { tipo: "completar", pergunta: "Concatenação transforma números em ____ para exibição.", resposta: "texto" },
      { tipo: "completar", pergunta: "System.out.println(5 + 5 + \" total\"); resulta em '____ total'.", resposta: "10" },
      { tipo: "escrever", pergunta: "Concatene 'Olá ' com a variável 'nome':", resposta: "\"Olá \" + nome" }
    ]
  },
  {
    id: 18, modulo: 2, titulo: "Constantes (final)",
    teoria: "Uma constante é uma variável que não pode ter seu valor alterado após a primeira atribuição. Usamos a palavra 'final'.",
    exemplo_codigo: "final double PI = 3.14;",
    exemplo_explicado: ["final: Impede alteração do valor.", "PI: Por convenção, constantes são MAIÚSCULAS.", "erro: Tentar mudar PI causará erro de compilação."],
    exercicios: [
      { tipo: "completar", pergunta: "Para criar constantes usamos a palavra ____.", resposta: "final" },
      { tipo: "completar", pergunta: "Constantes costumam ser escritas em ____.", resposta: "maiúsculas" },
      { tipo: "completar", pergunta: "O valor de uma constante ____ pode ser alterado.", resposta: "não" },
      { tipo: "completar", pergunta: "final int TAXA = 10; TAXA = 5; gera ____.", resposta: "erro" },
      { tipo: "completar", pergunta: "Constantes ajudam na ____ do código.", resposta: "segurança" },
      { tipo: "escrever", pergunta: "Declare uma constante 'VERSAO' igual a 1.0:", resposta: "final double VERSAO = 1.0;" }
    ]
  },
  {
    id: 19, modulo: 2, titulo: "Lendo Números com Scanner",
    teoria: "O Scanner possui métodos específicos: nextInt() para inteiros e nextDouble() para decimais.",
    exemplo_codigo: "int idade = ler.nextInt(); \ndouble preco = ler.nextDouble();",
    exemplo_explicado: ["nextInt(): Captura o próximo inteiro.", "nextDouble(): Captura o próximo decimal."],
    exercicios: [
      { tipo: "completar", pergunta: "Para ler um inteiro usamos next____().", resposta: "Int" },
      { tipo: "completar", pergunta: "Para ler um decimal usamos next____().", resposta: "Double" },
      { tipo: "completar", pergunta: "O método para ler apenas uma palavra é ____().", resposta: "next" },
      { tipo: "completar", pergunta: "Se digitar texto no nextInt() o Java gera um ____.", resposta: "erro" },
      { tipo: "completar", pergunta: "O Scanner ignora os ____ em branco.", resposta: "espaços" },
      { tipo: "escrever", pergunta: "Método para ler uma linha inteira:", resposta: "ler.nextLine();" }
    ]
  },
  {
    id: 20, modulo: 2, titulo: "Revisão de Entrada e Saída",
    teoria: "Dominamos System.out, variáveis String, int, double e a leitura com Scanner.",
    exemplo_codigo: "// Fim do Módulo 2",
    exemplo_explicado: ["Módulo 2: Concluído.", "Próximo passo: Condicionais."],
    exercicios: [
      { tipo: "completar", pergunta: "Saída de dados usa System.____.println.", resposta: "out" },
      { tipo: "completar", pergunta: "Entrada de dados usa a classe ____.", resposta: "Scanner" },
      { tipo: "completar", pergunta: "Variável para texto é ____.", resposta: "String" },
      { tipo: "completar", pergunta: "Variável para preço é ____.", resposta: "double" },
      { tipo: "completar", pergunta: "Variável para contagem inteira é ____.", resposta: "int" },
      { tipo: "escrever", pergunta: "Escreva o comando para somar 'a' e 'b':", resposta: "a + b" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 2 para o Supabase...");
  for (const aula of modulo2) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id,
        modulo: aula.modulo,
        titulo: aula.titulo,
        conteudo: aula.teoria,
        exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado,
        is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m2a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 2 Finalizado!");
}
semear();