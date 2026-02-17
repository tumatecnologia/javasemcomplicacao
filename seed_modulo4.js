import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo4 = [
  {
    id: 31, modulo: 4, titulo: "Loop 'while'",
    teoria: "O 'while' (enquanto) repete um bloco de código enquanto uma condição for verdadeira. É ideal quando não sabemos quantas vezes a repetição vai ocorrer.",
    exemplo_codigo: "int contador = 1; \nwhile (contador <= 5) { \n  System.out.println(contador); \n  contador++; \n}",
    exemplo_explicado: ["contador++: Incrementa a variável para evitar loop infinito.", "while: Checa a condição antes de executar.", "Loop Infinito: Acontece se a condição nunca ficar falsa."],
    exercicios: [
      { tipo: "completar", pergunta: "O loop 'enquanto' chama-se ____.", resposta: "while" },
      { tipo: "completar", pergunta: "O while checa a condição ____ de rodar o bloco.", resposta: "antes" },
      { tipo: "completar", pergunta: "Um loop que nunca termina é chamado de ____.", resposta: "infinito" },
      { tipo: "completar", pergunta: "Para sair do loop, a condição deve virar ____.", resposta: "false" },
      { tipo: "completar", pergunta: "while ( ____ ) { } // condicao", resposta: "condicao" },
      { tipo: "escrever", pergunta: "Comando para somar 1 a 'i':", resposta: "i++;" }
    ]
  },
  {
    id: 32, modulo: 4, titulo: "Loop 'do-while'",
    teoria: "O 'do-while' garante que o código seja executado pelo menos UMA vez, pois checa a condição apenas no final.",
    exemplo_codigo: "int nota = 0; \ndo { \n  // Pede a nota \n} while (nota < 0 || nota > 10);",
    exemplo_explicado: ["do: Executa o código primeiro.", "while: Checa a condição depois.", "Semicolon: O do-while exige um ponto e vírgula no final."],
    exercicios: [
      { tipo: "completar", pergunta: "O loop que roda pelo menos uma vez é o ____.", resposta: "do-while" },
      { tipo: "completar", pergunta: "do-while checa a condição no ____.", resposta: "final" },
      { tipo: "completar", pergunta: "A estrutura termina com ponto e ____.", resposta: "vírgula" },
      { tipo: "completar", pergunta: "A palavra 'do' significa ____.", resposta: "faça" },
      { tipo: "completar", pergunta: "do { } while ( ____ ); // condicao", resposta: "condicao" },
      { tipo: "escrever", pergunta: "Finalize o loop do-while:", resposta: ";}" }
    ]
  },
  {
    id: 33, modulo: 4, titulo: "Loop 'for'",
    teoria: "O 'for' é usado quando sabemos exatamente quantas vezes queremos repetir o código. Ele une inicialização, condição e incremento em uma linha.",
    exemplo_codigo: "for (int i = 0; i < 10; i++) { \n  System.out.println(i); \n}",
    exemplo_explicado: ["int i = 0: Inicialização.", "i < 10: Condição de parada.", "i++: Incremento automático."],
    exercicios: [
      { tipo: "completar", pergunta: "Loop com contador automático é o ____.", resposta: "for" },
      { tipo: "completar", pergunta: "A inicialização, condição e incremento são separados por ____.", resposta: "ponto e vírgula" },
      { tipo: "completar", pergunta: "No for, a variável 'i' geralmente significa ____.", resposta: "índice" },
      { tipo: "completar", pergunta: "O incremento i++ roda no ____ do bloco.", resposta: "final" },
      { tipo: "completar", pergunta: "for (int i = 0; i < 5; ____) { }", resposta: "i++" },
      { tipo: "escrever", pergunta: "Declare o loop for de 0 a 10:", resposta: "for (int i=0; i<=10; i++)" }
    ]
  },
  {
    id: 34, modulo: 4, titulo: "Break e Continue",
    teoria: "'break' encerra o loop imediatamente. 'continue' pula apenas a iteração atual e vai para a próxima.",
    exemplo_codigo: "for(int i=0; i<10; i++) { \n  if(i==5) break; // Para no 5 \n}",
    exemplo_explicado: ["break: Para tudo.", "continue: Pula uma rodada.", "Aplicações: Otimização de busca."],
    exercicios: [
      { tipo: "completar", pergunta: "Comando que para o loop é o ____.", resposta: "break" },
      { tipo: "completar", pergunta: "Comando que pula para o próximo passo é o ____.", resposta: "continue" },
      { tipo: "completar", pergunta: "break e continue funcionam em for e ____.", resposta: "while" },
      { tipo: "completar", pergunta: "O continue ignora o resto do ____ atual.", resposta: "bloco" },
      { tipo: "completar", pergunta: "break sai do loop mais ____.", resposta: "próximo" },
      { tipo: "escrever", pergunta: "Como pular o número 3 no loop:", resposta: "if (i == 3) continue;" }
    ]
  },
  {
    id: 35, modulo: 4, titulo: "Loops Aninhados",
    teoria: "Um loop dentro de outro loop. Útil para trabalhar com matrizes ou tabelas (linhas e colunas).",
    exemplo_codigo: "for (int i = 1; i <= 3; i++) { \n  for (int j = 1; j <= 3; j++) { \n    System.out.println(i + \"x\" + j); \n  } \n}",
    exemplo_explicado: ["i: Linha (loop externo).", "j: Coluna (loop interno).", "Execução: O loop interno executa totalmente a cada rodada do externo."],
    exercicios: [
      { tipo: "completar", pergunta: "Loop dentro de loop é ____.", resposta: "aninhado" },
      { tipo: "completar", pergunta: "O loop interno executa ____ a cada rodada do externo.", resposta: "totalmente" },
      { tipo: "completar", pergunta: "Loops aninhados podem causar ____ desempenho.", resposta: "baixo" },
      { tipo: "completar", pergunta: "Muito usado com ____.", resposta: "matrizes" },
      { tipo: "completar", pergunta: "for (int i=0; i<3; i++) { for (int j=0; j<3; ____) { } }", resposta: "j++" },
      { tipo: "escrever", pergunta: "Nome do loop de fora:", resposta: "externo" }
    ]
  },
  {
    id: 36, modulo: 4, titulo: "Entrada com Validação (while)",
    teoria: "Usamos loops para garantir que o usuário digite um dado correto (ex: idade positiva, nota entre 0-10).",
    exemplo_codigo: "int idade = -1; \nwhile (idade < 0) { \n  idade = ler.nextInt(); \n}",
    exemplo_explicado: ["Validação: Não aceita o dado até ser válido.", "Loop: Repete a pergunta.", "Experiência: Melhora a robustez do programa."],
    exercicios: [
      { tipo: "completar", pergunta: "Usa-se ____ para forçar entrada correta.", resposta: "loop" },
      { tipo: "completar", pergunta: "O loop roda enquanto o dado for ____.", resposta: "inválido" },
      { tipo: "completar", pergunta: "Validação melhora a ____ do software.", resposta: "robustez" },
      { tipo: "completar", pergunta: "A variável deve ser ____ antes do loop.", resposta: "inicializada" },
      { tipo: "completar", pergunta: "while (preco < ____) { ... }", resposta: "0" },
      { tipo: "escrever", pergunta: "Lógica de erro para nota:", resposta: "nota < 0" }
    ]
  },
  {
    id: 37, modulo: 4, titulo: "Tabuada com 'for'",
    teoria: "Exemplo prático do loop for para gerar a tabuada de um número.",
    exemplo_codigo: "for(int i=1; i<=10; i++) { \n  System.out.println(n + \"x\" + i + \"=\" + n*i); \n}",
    exemplo_explicado: ["i: Vai de 1 a 10.", "n: Número da tabuada.", "cálculo: Ocorre dentro do print."],
    exercicios: [
      { tipo: "completar", pergunta: "Tabuada usa i de 1 até ____.", resposta: "10" },
      { tipo: "completar", pergunta: "O for calcula o ____ a cada rodada.", resposta: "resultado" },
      { tipo: "completar", pergunta: "A tabuada do 5 tem ____ linhas.", resposta: "10" },
      { tipo: "completar", pergunta: "n * ____ // valor multiplicador", resposta: "i" },
      { tipo: "completar", pergunta: "for (int i=1; i<= ____; i++)", resposta: "10" },
      { tipo: "escrever", pergunta: "Imprimir '2 x 3 = 6':", resposta: "System.out.println(\"2 x 3 = 6\");" }
    ]
  },
  {
    id: 38, modulo: 4, titulo: "Contagem Regressiva",
    teoria: "Uso do for com decremento (i--) para fazer contagens decrescentes.",
    exemplo_codigo: "for(int i=10; i>0; i--) { \n  System.out.println(i); \n}",
    exemplo_explicado: ["i=10: Começa no 10.", "i>0: Para antes de 0.", "i--: Diminui de 1 em 1."],
    exercicios: [
      { tipo: "completar", pergunta: "Contagem regressiva usa ____.", resposta: "i--" },
      { tipo: "completar", pergunta: "for (int i=____; i>0; i--)", resposta: "10" },
      { tipo: "completar", pergunta: "O contrário de incremento é ____.", resposta: "decremento" },
      { tipo: "completar", pergunta: "i-- é igual a i = i - ____.", resposta: "1" },
      { tipo: "completar", pergunta: "O loop para quando i é ____ que 0.", resposta: "menor" },
      { tipo: "escrever", pergunta: "Começar do 5:", resposta: "i=5" }
    ]
  },
  {
    id: 39, modulo: 4, titulo: "Sumarização (Soma)",
    teoria: "Usar loops para somar uma sequência de números.",
    exemplo_codigo: "int soma = 0; \nfor(int i=1; i<=10; i++) { \n  soma += i; \n}",
    exemplo_explicado: ["soma = 0: Acumulador inicial.", "soma += i: Adiciona i à soma atual.", "Resultado: A soma de 1 a 10 é 55."],
    exercicios: [
      { tipo: "completar", pergunta: "Variável que guarda a soma é o ____.", resposta: "acumulador" },
      { tipo: "completar", pergunta: "acumulador deve começar com ____.", resposta: "0" },
      { tipo: "completar", pergunta: "soma += i é o mesmo que soma = soma + ____.", resposta: "i" },
      { tipo: "completar", pergunta: "Loops são ótimos para ____ dados.", resposta: "processar" },
      { tipo: "completar", pergunta: "soma ____ i; // operador de soma", resposta: "+=" },
      { tipo: "escrever", pergunta: "Acumular valor:", resposta: "+=" }
    ]
  },
  {
    id: 40, modulo: 4, titulo: "Revisão de Loops",
    teoria: "Dominamos while, do-while e for. Sabemos controlar o fluxo com break/continue e validar dados.",
    exemplo_codigo: "// Módulo 4 Concluído!",
    exemplo_explicado: ["Repetição: Entendida.", "Controle: Total.", "Próximo: Arrays (Vetores)."],
    exercicios: [
      { tipo: "completar", pergunta: "Loop que testa no final: ____.", resposta: "do-while" },
      { tipo: "completar", pergunta: "Loop com contador: ____.", resposta: "for" },
      { tipo: "completar", pergunta: "Parar loop: ____.", resposta: "break" },
      { tipo: "completar", pergunta: "O acumulador inicia com ____.", resposta: "0" },
      { tipo: "completar", pergunta: "i++ é ____.", resposta: "incremento" },
      { tipo: "escrever", pergunta: "Enquanto condição:", resposta: "while" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 4 para o Supabase...");
  for (const aula of modulo4) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m4a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 4 Finalizado!");
}
semear();