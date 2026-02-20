import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xwxkclrsbdozooqgfvnc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const modulo3_melhorado = [
  {
    id: 21, modulo: 3, titulo: "Estrutura Condicional (if)",
    teoria: "O 'if' (se) é a ferramenta que permite ao seu programa tomar decisões. \n\nEle avalia uma condição entre parênteses. Se essa condição resultar em 'true' (verdadeiro), o bloco de código dentro das chaves { } será executado. Caso contrário, o Java simplesmente pula esse bloco e segue o baile.",
    exemplo_codigo: "public class Decisao { // Classe principal\n  public static void main(String[] args) { // Método de entrada\n    int idade = 20; // Define uma idade\n    if (idade >= 18) { // Pergunta: A idade é maior ou igual a 18?\n      System.out.println(\"Acesso Liberado!\"); // Executa se for verdade\n    } // Fim do bloco if\n  } // Fim main\n}",
    exemplo_explicado: ["if: O comando de decisão.", "Condição: Sempre retorna verdadeiro ou falso.", "Chaves { }: Delimitam o território da decisão.", "Indentação: O recuo do código ajuda a ver o que está dentro do if."]
  },
  {
    id: 22, modulo: 3, titulo: "Estrutura Alternativa (else)",
    teoria: "E se a condição do 'if' for falsa? É aí que entra o 'else' (senão). \n\nO else não possui uma condição própria. Ele é como um 'plano B': se o if falhar, o else entra em ação obrigatoriamente. É a garantia de que um dos dois caminhos será percorrido.",
    exemplo_codigo: "public class PlanoB { // Classe exemplo\n  public static void main(String[] args) { // Método main\n    double nota = 6.5; // Nota do aluno\n    if (nota >= 7.0) { // Se nota maior ou igual a 7\n      System.out.println(\"Aprovado!\"); // Caminho A\n    } else { // Caso a condição acima seja falsa\n      System.out.println(\"Recuperação!\"); // Caminho B\n    } // Fim da estrutura\n  } // Fim main\n}",
    exemplo_explicado: ["else: O caminho alternativo obrigatório.", "Exclusividade: Nunca os dois blocos rodarão ao mesmo tempo.", "Sem Condição: O else nunca recebe (parênteses)."]
  },
  {
    id: 23, modulo: 3, titulo: "Operadores de Comparação",
    teoria: "Para o 'if' funcionar, precisamos comparar valores. \n\nOs principais operadores são: \n- == (Igual a)\n- != (Diferente de)\n- > (Maior que)\n- < (Menor que)\n- >= (Maior ou igual)\n- <= (Menor ou igual)\n\nCuidado: Um único '=' serve para GUARDAR valor. Dois '==' servem para COMPARAR.",
    exemplo_codigo: "public class Comparar { // Classe principal\n  public static void main(String[] args) { // Início\n    int a = 10; // Atribuição\n    int b = 20; // Atribuição\n    System.out.println(a == b); // Compara e imprime 'false'\n    System.out.