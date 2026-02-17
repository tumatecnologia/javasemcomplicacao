import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo5 = [
  {
    id: 41, modulo: 5, titulo: "O que é um Array?",
    teoria: "Um Array (ou Vetor) é uma estrutura de dados que armazena múltiplos valores do mesmo tipo em uma única variável. Ideal para listas.",
    exemplo_codigo: "int[] notas = new int[5];",
    exemplo_explicado: ["int[]: Define que é um array de inteiros.", "notas: Nome da variável.", "new int[5]: Cria espaço para 5 números."],
    exercicios: [
      { tipo: "completar", pergunta: "Arrays armazenam múltiplos valores do ____ tipo.", resposta: "mesmo" },
      { tipo: "completar", pergunta: "O símbolo para declarar um array é ____.", resposta: "[]" },
      { tipo: "completar", pergunta: "Para criar o array na memória usamos ____.", resposta: "new" },
      { tipo: "completar", pergunta: "Um array tem tamanho ____.", resposta: "fixo" },
      { tipo: "completar", pergunta: "String[] lista = ____ String[10];", resposta: "new" },
      { tipo: "escrever", pergunta: "Declare um array de doubles chamado 'precos':", resposta: "double[] precos;" }
    ]
  },
  {
    id: 42, modulo: 5, titulo: "Índices de Array",
    teoria: "O índice é a posição de um elemento no array. O Java começa a contar do ZERO. O último índice é tamanho - 1.",
    exemplo_codigo: "notas[0] = 10; \nint primeiraNota = notas[0];",
    exemplo_explicado: ["notas[0]: Acessa o primeiro elemento.", "Índice: Começa em 0.", "Erro: Acessar índice fora do tamanho gera erro."],
    exercicios: [
      { tipo: "completar", pergunta: "O primeiro índice de um array é ____.", resposta: "0" },
      { tipo: "completar", pergunta: "Se o tamanho é 5, o último índice é ____.", resposta: "4" },
      { tipo: "completar", pergunta: "Para acessar um elemento usamos ____.", resposta: "colchetes" },
      { tipo: "completar", pergunta: "notas[____] = 9.5; // coloca na terceira posicao", resposta: "2" },
      { tipo: "completar", pergunta: "Array[tamanho-1] acessa o ____ elemento.", resposta: "último" },
      { tipo: "escrever", pergunta: "Acesse o valor da posição 5:", resposta: "array[4];" }
    ]
  },
  {
    id: 43, modulo: 5, titulo: "Inicializando Arrays",
    teoria: "Podemos criar e preencher o array na mesma linha, usando chaves {}.",
    exemplo_codigo: "int[] idades = {10, 20, 30, 40};",
    exemplo_explicado: ["{}: Define os valores iniciais.", "Tamanho: O Java conta quantos valores tem dentro das chaves.", "Sem 'new': Não precisa usar 'new' ao inicializar assim."],
    exercicios: [
      { tipo: "completar", pergunta: "Valores iniciais ficam entre ____.", resposta: "chaves" },
      { tipo: "completar", pergunta: "int[] a = ____ {1, 2}; // o que falta?", resposta: "new int[]" },
      { tipo: "completar", pergunta: "Nesta forma, o ____ é automático.", resposta: "tamanho" },
      { tipo: "completar", pergunta: "String[] nomes = {____, \"Maria\"}; // faltam aspas", resposta: "\"João\"" },
      { tipo: "completar", pergunta: "Os valores são separados por ____.", resposta: "vírgula" },
      { tipo: "escrever", pergunta: "Inicialize um array com 1, 2, 3:", resposta: "{1, 2, 3};" }
    ]
  },
  {
    id: 44, modulo: 5, titulo: "Percorrendo Arrays (for)",
    teoria: "Usamos o loop 'for' para acessar cada elemento do array sequencialmente.",
    exemplo_codigo: "for (int i = 0; i < notas.length; i++) { \n  System.out.println(notas[i]); \n}",
    exemplo_explicado: ["notas.length: Propriedade que retorna o tamanho do array.", "i < notas.length: Condição de parada.", "notas[i]: Acessa o elemento atual do loop."],
    exercicios: [
      { tipo: "completar", pergunta: "O tamanho do array é obtido por .____.", resposta: "length" },
      { tipo: "completar", pergunta: "Para percorrer, o for vai de 0 até length____.", resposta: "-1" },
      { tipo: "completar", pergunta: "O loop mais comum para isso é o ____.", resposta: "for" },
      { tipo: "completar", pergunta: "array[____] // variavel do loop", resposta: "i" },
      { tipo: "completar", pergunta: "A condicao do for é i < ____", resposta: "tamanho" },
      { tipo: "escrever", pergunta: "Sintaxe para tamanho do array:", resposta: ".length" }
    ]
  },
  {
    id: 45, modulo: 5, titulo: "Loop 'for-each' (Avançado)",
    teoria: "Uma forma mais simples e moderna do 'for' para ler todos os elementos de um array, sem usar índices.",
    exemplo_codigo: "for (int nota : notas) { \n  System.out.println(nota); \n}",
    exemplo_explicado: ["int nota: Variável que recebe o valor atual.", ":notas: O array que está sendo percorrido.", "Limitação: Não dá para modificar o array original, só ler."],
    exercicios: [
      { tipo: "completar", pergunta: "Loop moderno chama-se ____.", resposta: "for-each" },
      { tipo: "completar", pergunta: "O for-each é usado apenas para ____.", resposta: "leitura" },
      { tipo: "completar", pergunta: "Não usamos ____ no for-each.", resposta: "índices" },
      { tipo: "completar", pergunta: "for (String n ____ lista) { } // simbolo", resposta: ":" },
      { tipo: "completar", pergunta: "O for-each é mais ____ de escrever.", resposta: "fácil" },
      { tipo: "escrever", pergunta: "Símbolo do for-each:", resposta: ":" }
    ]
  },
  {
    id: 46, modulo: 5, titulo: "Modificando Arrays",
    teoria: "Podemos alterar o valor de um índice específico a qualquer momento.",
    exemplo_codigo: "nomes[0] = \"Gustavo\";",
    exemplo_explicado: ["nomes[0]: Indica a posição.", "=: Atribui o novo valor.", "Permanência: O valor antigo é perdido."],
    exercicios: [
      { tipo: "completar", pergunta: "Para alterar, usamos o ____.", resposta: "índice" },
      { tipo: "completar", pergunta: "O valor antigo é ____.", resposta: "substituído" },
      { tipo: "completar", pergunta: "array[i] = ____; // novo valor", resposta: "valor" },
      { tipo: "completar", pergunta: "Arrays são ____ (podem ser alterados).", resposta: "mutáveis" },
      { tipo: "completar", pergunta: "notas[0] = 10; // ____ de valor", resposta: "atribuição" },
      { tipo: "escrever", pergunta: "Trocar valor da posição 1:", resposta: "array[0] = novoValor;" }
    ]
  },
  {
    id: 47, modulo: 5, titulo: "Arrays Bidimensionais (Matrizes)",
    teoria: "Um array de arrays. Pense como uma tabela com linhas e colunas.",
    exemplo_codigo: "int[][] matriz = new int[3][3];",
    exemplo_explicado: ["int[][]: Array de duas dimensões.", "[3][3]: 3 linhas e 3 colunas.", "Acesso: matriz[linha][coluna]."],
    exercicios: [
      { tipo: "completar", pergunta: "Matriz tem ____ dimensões.", resposta: "duas" },
      { tipo: "completar", pergunta: "Acesso: matriz[____][coluna]", resposta: "linha" },
      { tipo: "completar", pergunta: "Para percorrer usamos ____ loops.", resposta: "dois" },
      { tipo: "completar", pergunta: "Uma matriz é um array de ____.", resposta: "arrays" },
      { tipo: "completar", pergunta: "matriz[0][____] = 10; // primeira linha, segunda coluna", resposta: "1" },
      { tipo: "escrever", pergunta: "Declarar matriz 2x2:", resposta: "new int[2][2];" }
    ]
  },
  {
    id: 48, modulo: 5, titulo: "Classe Arrays (util)",
    teoria: "O Java possui a classe `java.util.Arrays` com métodos úteis para manipular vetores.",
    exemplo_codigo: "Arrays.sort(notas); // Ordena",
    exemplo_explicado: ["Arrays.sort(): Ordena o array.", "Arrays.toString(): Converte o array em texto.", "Import: `import java.util.Arrays;`"],
    exercicios: [
      { tipo: "completar", pergunta: "A classe de utilitários é ____.", resposta: "Arrays" },
      { tipo: "completar", pergunta: "Método para ordenar: ____.", resposta: "sort" },
      { tipo: "completar", pergunta: "Método para exibir: ____.", resposta: "toString" },
      { tipo: "completar", pergunta: "Classe pertence ao pacote ____.", resposta: "java.util" },
      { tipo: "completar", pergunta: "Arrays.____(vetor); // ordenar", resposta: "sort" },
      { tipo: "escrever", pergunta: "Ordenar um array 'a':", resposta: "Arrays.sort(a);" }
    ]
  },
  {
    id: 49, modulo: 5, titulo: "Valores Padrão",
    teoria: "Se você criar um array e não definir valores, o Java coloca valores padrão: 0 para números, false para booleans e null para objetos.",
    exemplo_codigo: "int[] vazio = new int[5]; // Tudo é 0",
    exemplo_explicado: ["0: Padrão numérico.", "null: Padrão para objetos (Strings).", "Segurança: Evita erros de memória não inicializada."],
    exercicios: [
      { tipo: "completar", pergunta: "Padrão de int: ____.", resposta: "0" },
      { tipo: "completar", pergunta: "Padrão de double: ____.", resposta: "0.0" },
      { tipo: "completar", pergunta: "Padrão de String: ____.", resposta: "null" },
      { tipo: "completar", pergunta: "Padrão de boolean: ____.", resposta: "false" },
      { tipo: "completar", pergunta: "null significa ____.", resposta: "vazio" },
      { tipo: "escrever", pergunta: "Padrão numérico:", resposta: "0" }
    ]
  },
  {
    id: 50, modulo: 5, titulo: "Revisão de Arrays",
    teoria: "Dominamos declaração, índices, percorrer (for/for-each), matrizes e utilitários.",
    exemplo_codigo: "// Módulo 5 Concluído!",
    exemplo_explicado: ["Listas: Dominadas.", "Dados: Estruturados.", "Próximo: Orientação a Objetos."],
    exercicios: [
      { tipo: "completar", pergunta: "Índice começa em ____.", resposta: "0" },
      { tipo: "completar", pergunta: "Tamanho de array: .____.", resposta: "length" },
      { tipo: "completar", pergunta: "Ordenar: Arrays.____().", resposta: "sort" },
      { tipo: "completar", pergunta: "Matriz usa ____ colchetes.", resposta: "dois" },
      { tipo: "completar", pergunta: "for-each serve para ____.", resposta: "leitura" },
      { tipo: "escrever", pergunta: "Tipo de array de String:", resposta: "String[]" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 5 para o Supabase...");
  for (const aula of modulo5) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m5a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 5 Finalizado!");
}
semear();