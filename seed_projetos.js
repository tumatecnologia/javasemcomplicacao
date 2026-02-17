import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const moduloProjetos = [
  {
    id: 101, modulo: 11, titulo: "Projeto 1: Calculadora Console",
    teoria: "Neste projeto, você aplicará tipos primitivos, operadores aritméticos e a classe Scanner para criar uma calculadora funcional.",
    exemplo_codigo: "System.out.println(\"1. Somar \\n2. Subtrair\"); \nint op = ler.nextInt();",
    exemplo_explicado: ["Entrada: Captura de números.", "Processamento: Operações matemáticas.", "Saída: Exibição do resultado."],
    exercicios: [
      { tipo: "completar", pergunta: "Para ler números usamos a classe ____.", resposta: "Scanner" },
      { tipo: "completar", pergunta: "Calculadoras usam tipos int ou ____.", resposta: "double" },
      { tipo: "escrever", pergunta: "Comando para imprimir:", resposta: "System.out.println" }
    ]
  },
  {
    id: 102, modulo: 11, titulo: "Projeto 2: Sistema de Notas",
    teoria: "Aplicação de Arrays e Loops para calcular a média de uma turma e identificar alunos aprovados ou reprovados.",
    exemplo_codigo: "double[] notas = new double[4]; \nfor(double n : notas) { soma += n; }",
    exemplo_explicado: ["Array: Armazena as notas.", "Loop: Percorre a lista.", "Condicional: Define se a média >= 7."],
    exercicios: [
      { tipo: "completar", pergunta: "Para guardar várias notas usamos um ____.", resposta: "array" },
      { tipo: "completar", pergunta: "O tamanho do array é definido no ____.", resposta: "início" },
      { tipo: "escrever", pergunta: "Cálculo da média:", resposta: "soma / total" }
    ]
  },
  {
    id: 103, modulo: 11, titulo: "Projeto 3: Conta Bancária OO",
    teoria: "Criação de uma classe Conta com atributos privados, métodos de depósito e saque, aplicando Encapsulamento.",
    exemplo_codigo: "private double saldo; \npublic void sacar(double v) { saldo -= v; }",
    exemplo_explicado: ["Encapsulamento: Saldo protegido.", "Método: Regra de saque (não negativar).", "This: Referência ao atributo."],
    exercicios: [
      { tipo: "completar", pergunta: "O saldo deve ser um atributo ____.", resposta: "private" },
      { tipo: "completar", pergunta: "Usamos ____ para ler o saldo com segurança.", resposta: "getters" },
      { tipo: "escrever", pergunta: "Subtrair valor do saldo:", resposta: "this.saldo -= valor;" }
    ]
  },
  {
    id: 104, modulo: 11, titulo: "Projeto 4: Cadastro de Clientes (CRUD)",
    teoria: "Primeiro contato com persistência. Criar uma lista (ArrayList) que permite Adicionar, Listar e Remover clientes.",
    exemplo_codigo: "ArrayList<Cliente> lista = new ArrayList<>(); \nlista.add(novoCliente);",
    exemplo_explicado: ["ArrayList: Lista dinâmica.", "Objeto: Classe Cliente com Nome/CPF.", "CRUD: Create, Read, Update, Delete."],
    exercicios: [
      { tipo: "completar", pergunta: "CRUD significa Criar, Ler, Atualizar e ____.", resposta: "Deletar" },
      { tipo: "completar", pergunta: "A lista de clientes deve ser um ____.", resposta: "ArrayList" },
      { tipo: "escrever", pergunta: "Remover cliente da lista:", resposta: "lista.remove(cliente);" }
    ]
  },
  {
    id: 105, modulo: 11, titulo: "Projeto 5: Sistema de Herança (RH)",
    teoria: "Criar uma classe Funcionario e subclasses Gerente e Diretor, aplicando Polimorfismo no cálculo de bonificação.",
    exemplo_codigo: "public abstract class Funcionario {} \npublic class Gerente extends Funcionario {}",
    exemplo_explicado: ["Herança: Reuso de código.", "@Override: Especializar o cálculo.", "Abstrata: Classe pai que não vira objeto."],
    exercicios: [
      { tipo: "completar", pergunta: "Gerente ____ de Funcionario.", resposta: "herda" },
      { tipo: "completar", pergunta: "Usamos ____ para mudar o método na filha.", resposta: "@Override" },
      { tipo: "escrever", pergunta: "Palavra de herança:", resposta: "extends" }
    ]
  },
  {
    id: 106, modulo: 11, titulo: "Projeto 6: Agenda com Banco de Dados",
    teoria: "Integrar o Java com JDBC para salvar contatos permanentemente em um banco de dados SQL.",
    exemplo_codigo: "String sql = \"INSERT INTO agenda (nome) VALUES (?)\";",
    exemplo_explicado: ["JDBC: Ponte de conexão.", "SQL: Linguagem do banco.", "PreparedStatement: Segurança contra ataques."],
    exercicios: [
      { tipo: "completar", pergunta: "Para salvar no banco usamos a API ____.", resposta: "JDBC" },
      { tipo: "completar", pergunta: "O símbolo ____ evita SQL Injection.", resposta: "?" },
      { tipo: "escrever", pergunta: "Comando de inserção SQL:", resposta: "INSERT INTO" }
    ]
  },
  {
    id: 107, modulo: 11, titulo: "Projeto 7: Conversor de Moedas (API)",
    teoria: "Aprender a lidar com Exceptions ao buscar dados externos ou converter tipos de dados em um conversor real.",
    exemplo_codigo: "try { double v = Double.parseDouble(input); } \ncatch (NumberFormatException e) { ... }",
    exemplo_explicado: ["Try-Catch: Evita que o app feche em erro.", "Parsing: Converter String para Double.", "Robustez: Tratamento de entradas inválidas."],
    exercicios: [
      { tipo: "completar", pergunta: "Erros esperados são tratados no ____.", resposta: "catch" },
      { tipo: "completar", pergunta: "O bloco ____ limpa os recursos.", resposta: "finally" },
      { tipo: "escrever", pergunta: "Capturar erro de número:", resposta: "NumberFormatException" }
    ]
  },
  {
    id: 108, modulo: 11, titulo: "Projeto 8: Controle de Estoque",
    teoria: "Uso de Mapas (HashMap) para gerenciar produtos e quantidades de forma eficiente através de chaves únicas (ID).",
    exemplo_codigo: "HashMap<Integer, Produto> estoque = new HashMap<>();",
    exemplo_explicado: ["Chave: Código do produto.", "Valor: Objeto Produto.", "Performance: Busca instantânea."],
    exercicios: [
      { tipo: "completar", pergunta: "Para buscas rápidas por ID usamos ____.", resposta: "HashMap" },
      { tipo: "completar", pergunta: "O mapa guarda pares Chave e ____.", resposta: "Valor" },
      { tipo: "escrever", pergunta: "Adicionar ao mapa:", resposta: "put(id, produto)" }
    ]
  },
  {
    id: 109, modulo: 11, titulo: "Projeto 9: Simulador de Login",
    teoria: "Criar uma interface 'Autenticavel' e implementar em diferentes tipos de usuários, simulando um sistema real.",
    exemplo_codigo: "interface Autenticavel { boolean login(String s); }",
    exemplo_explicado: ["Interface: Define um comportamento obrigatório.", "Segurança: Padronização do acesso.", "Flexibilidade: Várias classes 'logáveis'."],
    exercicios: [
      { tipo: "completar", pergunta: "Interfaces definem um ____ de métodos.", resposta: "contrato" },
      { tipo: "completar", pergunta: "Uma classe ____ uma interface.", resposta: "implementa" },
      { tipo: "escrever", pergunta: "Palavra de implementação:", resposta: "implements" }
    ]
  },
  {
    id: 110, modulo: 11, titulo: "Projeto Final: Sistema ERP Completo",
    teoria: "O desafio final: Unir OO, Collections, JDBC e Exceptions em um pequeno sistema de gestão de vendas.",
    exemplo_codigo: "// O ápice do seu conhecimento Java!",
    exemplo_explicado: ["Integração: Tudo funcionando junto.", "Arquitetura: Organização em camadas.", "Conclusão: Você é um desenvolvedor Java!"],
    exercicios: [
      { tipo: "completar", pergunta: "O projeto final une todos os ____ aprendidos.", resposta: "conceitos" },
      { tipo: "completar", pergunta: "Programação é prática e ____.", resposta: "persistência" },
      { tipo: "escrever", pergunta: "Parabéns em Java:", resposta: "System.out.println(\"Sucesso!\");" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo de Projetos para o Supabase...");
  for (const aula of moduloProjetos) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m11a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Projeto " + aula.id + " OK");
  }
  console.log("🏁 Módulo de Projetos Finalizado com Sucesso!");
}
semear();