import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo3 = [
  {
    id: 21, modulo: 3, titulo: "Estrutura Condicional (if)",
    teoria: "O 'if' permite que o código execute um bloco apenas se uma condição for verdadeira. É o ponto de decisão fundamental do programa.",
    exemplo_codigo: "if (idade >= 18) { \n  System.out.println(\"Maior de idade\"); \n}",
    exemplo_explicado: ["if: 'Se' em inglês.", "(condição): Deve resultar em true ou false.", "{ }: Delimitam o que será executado."],
    exercicios: [
      { tipo: "completar", pergunta: "A estrutura 'se' no Java chama-se ____.", resposta: "if" },
      { tipo: "completar", pergunta: "A condição do if deve estar entre ____.", resposta: "parênteses" },
      { tipo: "completar", pergunta: "O bloco de código do if é delimitado por ____.", resposta: "chaves" },
      { tipo: "completar", pergunta: "Se a condição for falsa, o if é ____.", resposta: "ignorado" },
      { tipo: "completar", pergunta: "if (x ____ 10) { } // x é igual a 10", resposta: "==" },
      { tipo: "escrever", pergunta: "Crie um if para 'x' maior que 0:", resposta: "if (x > 0) { }" }
    ]
  },
  {
    id: 22, modulo: 3, titulo: "Estrutura Alternativa (else)",
    teoria: "O 'else' é o caminho contrário do if. Se a condição for falsa, o bloco dentro do else será executado obrigatoriamente.",
    exemplo_codigo: "if (nota >= 7) { \n  System.out.println(\"Aprovado\"); \n} else { \n  System.out.println(\"Reprovado\"); \n}",
    exemplo_explicado: ["else: 'Senão' em inglês.", "Exclusividade: Ou executa o if, ou executa o else.", "Sem parênteses: O else não recebe condição própria."],
    exercicios: [
      { tipo: "completar", pergunta: "O 'senão' no Java chama-se ____.", resposta: "else" },
      { tipo: "completar", pergunta: "O else vem sempre ____ de um if.", resposta: "depois" },
      { tipo: "completar", pergunta: "O ____ nunca recebe uma condição entre parênteses.", resposta: "else" },
      { tipo: "completar", pergunta: "Se o if for verdadeiro, o else ____ é executado.", resposta: "não" },
      { tipo: "completar", pergunta: "O else garante que ____ bloco de código será rodado.", resposta: "um" },
      { tipo: "escrever", pergunta: "Escreva 'senão' corretamente:", resposta: "else" }
    ]
  },
  {
    id: 23, modulo: 3, titulo: "Operadores de Comparação",
    teoria: "Para criar condições, usamos operadores: == (igual), != (diferente), > (maior), < (menor), >= e <=.",
    exemplo_codigo: "boolean teste = (10 == 10); // true \nboolean erro = (5 != 5); // false",
    exemplo_explicado: ["==: Dois sinais de igual para comparação.", "!=: Exclamação e igual para diferença.", "Resultados: Sempre devolvem um boolean."],
    exercicios: [
      { tipo: "completar", pergunta: "O sinal de 'diferente' é ____.", resposta: "!=" },
      { tipo: "completar", pergunta: "Para comparar igualdade usamos ____.", resposta: "==" },
      { tipo: "completar", pergunta: "O sinal de 'maior ou igual' é ____.", resposta: ">=" },
      { tipo: "completar", pergunta: "Apenas um '=' serve para ____, não para comparar.", resposta: "atribuição" },
      { tipo: "completar", pergunta: "O operador < significa ____ que.", resposta: "menor" },
      { tipo: "escrever", pergunta: "Operador de igualdade:", resposta: "==" }
    ]
  },
  {
    id: 24, modulo: 3, titulo: "Várias Condições (else if)",
    teoria: "Quando temos mais de duas opções, usamos o 'else if'. O Java testará cada uma até encontrar uma verdadeira.",
    exemplo_codigo: "if (hora < 12) { ... } \nelse if (hora < 18) { ... } \nelse { ... }",
    exemplo_explicado: ["else if: Testa uma nova condição se a anterior falhou.", "Encadeamento: Pode haver quantos else if você precisar.", "Finalização: O else final é opcional."],
    exercicios: [
      { tipo: "completar", pergunta: "Para uma segunda condição usamos else ____.", resposta: "if" },
      { tipo: "completar", pergunta: "O Java para no ____ else if que for verdadeiro.", resposta: "primeiro" },
      { tipo: "completar", pergunta: "else if precisa de uma ____ entre parênteses.", resposta: "condição" },
      { tipo: "completar", pergunta: "Pode haver ____ else if em uma estrutura.", resposta: "vários" },
      { tipo: "completar", pergunta: "O ____ é o bloco final de segurança.", resposta: "else" },
      { tipo: "escrever", pergunta: "Comando para testar outra condição:", resposta: "else if" }
    ]
  },
  {
    id: 25, modulo: 3, titulo: "Operador Lógico E (&&)",
    teoria: "O operador && (AND) exige que TODAS as condições sejam verdadeiras para que o resultado final seja true.",
    exemplo_codigo: "if (idade >= 18 && temCarteira == true) { ... }",
    exemplo_explicado: ["&&: Representa a conjunção 'E'.", "Rigor: Se uma parte for false, tudo vira false.", "Uso: Validar requisitos cumulativos."],
    exercicios: [
      { tipo: "completar", pergunta: "O operador 'E' é representado por ____.", resposta: "&&" },
      { tipo: "completar", pergunta: "No &&, todas as partes devem ser ____.", resposta: "verdadeiras" },
      { tipo: "completar", pergunta: "true && false resulta em ____.", resposta: "false" },
      { tipo: "completar", pergunta: "O símbolo & chama-se ____ comercial.", resposta: "e" },
      { tipo: "completar", pergunta: "Se a primeira parte do && for false, o Java nem olha a ____.", resposta: "segunda" },
      { tipo: "escrever", pergunta: "Símbolo do operador lógico E:", resposta: "&&" }
    ]
  },
  {
    id: 26, modulo: 3, titulo: "Operador Lógico OU (||)",
    teoria: "O operador || (OR) exige que apenas UMA das condições seja verdadeira para o resultado ser true.",
    exemplo_codigo: "if (dia == \"Sábado\" || dia == \"Domingo\") { ... }",
    exemplo_explicado: ["||: Representa a disjunção 'OU'.", "Flexibilidade: Basta um true para validar o bloco.", "Símbolo: Chama-se 'pipe'."],
    exercicios: [
      { tipo: "completar", pergunta: "O operador 'OU' é representado por ____.", resposta: "||" },
      { tipo: "completar", pergunta: "No ||, basta ____ condição ser true.", resposta: "uma" },
      { tipo: "completar", pergunta: "false || true resulta em ____.", resposta: "true" },
      { tipo: "completar", pergunta: "O símbolo | chama-se ____.", resposta: "pipe" },
      { tipo: "completar", pergunta: "false || false resulta em ____.", resposta: "false" },
      { tipo: "escrever", pergunta: "Símbolo do operador lógico OU:", resposta: "||" }
    ]
  },
  {
    id: 27, modulo: 3, titulo: "Operador de Negação (!)",
    teoria: "O operador ! (NOT) inverte o valor de um boolean. O que era true vira false e vice-versa.",
    exemplo_codigo: "boolean ligado = true; \nif (!ligado) { ... } // Se não estiver ligado",
    exemplo_explicado: ["!: Operador unário de inversão.", "!true: vira false.", "!false: vira true."],
    exercicios: [
      { tipo: "completar", pergunta: "O operador de negação é o sinal de ____.", resposta: "!" },
      { tipo: "completar", pergunta: "Ele inverte o valor de um ____.", resposta: "boolean" },
      { tipo: "completar", pergunta: "!(10 > 5) resulta em ____.", resposta: "false" },
      { tipo: "completar", pergunta: "A negação de false é ____.", resposta: "true" },
      { tipo: "completar", pergunta: "Dois operadores de negação (!!) voltam ao valor ____.", resposta: "original" },
      { tipo: "escrever", pergunta: "Sinal de exclamação no Java:", resposta: "!" }
    ]
  },
  {
    id: 28, modulo: 3, titulo: "Escolha Múltipla (switch)",
    teoria: "O 'switch' é uma alternativa elegante ao 'if' quando se testa o valor exato de uma única variável.",
    exemplo_codigo: "switch (opcao) { \n  case 1: ... break; \n  default: ... \n}",
    exemplo_explicado: ["switch: Recebe a variável a ser testada.", "case: Define o valor esperado.", "break: Sai do switch (obrigatório para não 'vazar').", "default: Caso nenhum valor combine."],
    exercicios: [
      { tipo: "completar", pergunta: "Para testar valores fixos usamos o ____.", resposta: "switch" },
      { tipo: "completar", pergunta: "Cada valor de teste é definido por um ____.", resposta: "case" },
      { tipo: "completar", pergunta: "Para interromper um case usamos o ____.", resposta: "break" },
      { tipo: "completar", pergunta: "O bloco padrão é o ____.", resposta: "default" },
      { tipo: "completar", pergunta: "O switch funciona bem com int, char e ____.", resposta: "String" },
      { tipo: "escrever", pergunta: "Comando para sair do case:", resposta: "break" }
    ]
  },
  {
    id: 29, modulo: 3, titulo: "Comparando Strings (.equals)",
    teoria: "Dica de Ouro: No Java, não usamos == para comparar o conteúdo de Strings. Usamos o método .equals().",
    exemplo_codigo: "if (nome.equals(\"Gustavo\")) { ... }",
    exemplo_explicado: [".equals(): Compara o texto interno.", "==: Compara o endereço de memória (quase sempre falha em Strings).", "Case Sensitive: equals() diferencia maiúsculas."],
    exercicios: [
      { tipo: "completar", pergunta: "Para comparar o texto de Strings usamos .____().", resposta: "equals" },
      { tipo: "completar", pergunta: "O sinal == em Strings compara a ____.", resposta: "memória" },
      { tipo: "completar", pergunta: "Para ignorar maiúsculas usamos .equalsIgnoreCase____().", resposta: "()" },
      { tipo: "completar", pergunta: "String é um objeto, por isso usamos ____.", resposta: "métodos" },
      { tipo: "completar", pergunta: "nome.____(\"Java\")", resposta: "equals" },
      { tipo: "escrever", pergunta: "Método de igualdade de String:", resposta: "equals" }
    ]
  },
  {
    id: 30, modulo: 3, titulo: "Revisão de Condicionais",
    teoria: "Você agora sabe fazer o Java tomar decisões complexas usando if, else, switch e operadores lógicos.",
    exemplo_codigo: "// Módulo 3 Concluído!",
    exemplo_explicado: ["Lógica: Construída.", "Decisões: Automatizadas.", "Próximo: Repetições (Loops)."],
    exercicios: [
      { tipo: "completar", pergunta: "Se o if falha, o ____ pode rodar.", resposta: "else" },
      { tipo: "completar", pergunta: "Para 'OU' usamos o símbolo ____.", resposta: "||" },
      { tipo: "completar", pergunta: "O break é usado no ____.", resposta: "switch" },
      { tipo: "completar", pergunta: "O sinal de igualdade é ____.", resposta: "==" },
      { tipo: "completar", pergunta: "O sinal de negação é ____.", resposta: "!" },
      { tipo: "escrever", pergunta: "Qual o oposto de false?", resposta: "true" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 3 para o Supabase...");
  for (const aula of modulo3) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m3a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    const { error: exError } = await supabase.from('exercicios').upsert(exs);
    if (exError) console.error("❌ Erro ex aula " + aula.id, exError);
    else console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 3 Finalizado!");
}
semear();