export const modulo2 = [
  {
    id: 11,
    titulo: "Imprimindo uma linha de texto",
    teoria: "Em Java, utilizamos o método System.out.println para exibir mensagens no console. Cada chamada a este método adiciona uma nova linha ao final da mensagem.",
    exercicios: [
      { id: "l11e1", tipo: "completar", pergunta: "System.out.____(\"Olá\");", resposta: "println" },
      { id: "l11e2", tipo: "completar", pergunta: "O objeto padrão de saída em Java é o System.____", resposta: "out" },
      { id: "l11e3", tipo: "completar", pergunta: "O método que imprime e pula linha é o ____", resposta: "println" },
      { id: "l11e4", tipo: "completar", pergunta: "Strings em Java devem estar entre ____ duplas.", resposta: "aspas" },
      { id: "l11e5", tipo: "completar", pergunta: "Toda instrução Java termina com ____", resposta: ";" },
      { id: "l11e6", tipo: "escrever", pergunta: "Escreva o código Java para imprimir 'Curso Java':", resposta: "System.out.println(\"Curso Java\");" }
    ]
  },
  {
    id: 13,
    titulo: "Exibindo texto com printf",
    teoria: "O método printf (print formatted) permite formatar a saída. Usamos %s para strings, %d para inteiros e %n para pular linha.",
    exercicios: [
      { id: "l13e1", tipo: "completar", pergunta: "O especificador para números inteiros é %____", resposta: "d" },
      { id: "l13e2", tipo: "completar", pergunta: "O especificador para texto (String) é %____", resposta: "s" },
      { id: "l13e3", tipo: "completar", pergunta: "Para pular linha no printf usamos %____", resposta: "n" },
      { id: "l13e4", tipo: "completar", pergunta: "System.out.____(\"Idade: %d\", 25);", resposta: "printf" },
      { id: "l13e5", tipo: "completar", pergunta: "O printf aceita múltiplos ____ de formatação.", resposta: "argumentos" },
      { id: "l13e6", tipo: "escrever", pergunta: "Use printf para exibir 'Nota: 10':", resposta: "System.out.printf(\"Nota: %d\", 10);" }
    ]
  }
  // Adicionaremos as outras aulas seguindo o mesmo padrão
];
