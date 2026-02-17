import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo6 = [
  {
    id: 51, modulo: 6, titulo: "Classes e Objetos",
    teoria: "Classe é o molde (planta baixa) e Objeto é a instância (a casa construída). OO organiza o código baseando-se em entidades do mundo real.",
    exemplo_codigo: "public class Carro { \n  String modelo; \n}\nCarro meuCarro = new Carro();",
    exemplo_explicado: ["class: Define o molde.", "new: Cria a instância na memória.", "Objeto: Representação física da classe."],
    exercicios: [
      { tipo: "completar", pergunta: "O molde para criar objetos é a ____.", resposta: "class" },
      { tipo: "completar", pergunta: "A instância de uma classe é um ____.", resposta: "objeto" },
      { tipo: "completar", pergunta: "Para criar um objeto usamos '____'.", resposta: "new" },
      { tipo: "completar", pergunta: "Objetos têm atributos e ____.", resposta: "métodos" },
      { tipo: "completar", pergunta: "Carro c = ____ Carro();", resposta: "new" },
      { tipo: "escrever", pergunta: "O que é um objeto?", resposta: "Instância de uma classe" }
    ]
  },
  {
    id: 52, modulo: 6, titulo: "Atributos (Campos)",
    teoria: "Atributos são as características ou dados que um objeto possui (variáveis dentro da classe).",
    exemplo_codigo: "class Pessoa { \n  String nome; \n  int idade; \n}",
    exemplo_explicado: ["nome: Atributo de texto.", "idade: Atributo numérico.", "Dados: Definem o estado do objeto."],
    exercicios: [
      { tipo: "completar", pergunta: "Características do objeto são seus ____.", resposta: "atributos" },
      { tipo: "completar", pergunta: "Atributos são ____ definidos na classe.", resposta: "variáveis" },
      { tipo: "completar", pergunta: "Acesso a atributos usa o ponto: objeto.____.", resposta: "atributo" },
      { tipo: "completar", pergunta: "Atributos definem o ____ do objeto.", resposta: "estado" },
      { tipo: "completar", pergunta: "p.____ = \"Ana\"; // definindo o nome", resposta: "nome" },
      { tipo: "escrever", pergunta: "Atributo para peso:", resposta: "double peso;" }
    ]
  },
  {
    id: 53, modulo: 6, titulo: "Métodos (Comportamentos)",
    teoria: "Métodos são as ações que um objeto pode realizar (funções dentro da classe).",
    exemplo_codigo: "class Carro { \n  void acelerar() { \n    System.out.println(\"Vrum\"); \n  }\n}",
    exemplo_explicado: ["void: Método não retorna valor.", "Ação: O que o objeto faz.", "Chamada: objeto.metodo();"],
    exercicios: [
      { tipo: "completar", pergunta: "Ações que o objeto faz são ____.", resposta: "métodos" },
      { tipo: "completar", pergunta: "Métodos são ____ dentro da classe.", resposta: "funções" },
      { tipo: "completar", pergunta: "Para chamar um método usamos ____.", resposta: "parênteses" },
      { tipo: "completar", pergunta: "objeto.____(); // chamando o método", resposta: "metodo" },
      { tipo: "completar", pergunta: "Método void não ____ valor.", resposta: "retorna" },
      { tipo: "escrever", pergunta: "Chamar método 'correr':", resposta: "correr();" }
    ]
  },
  {
    id: 54, modulo: 6, titulo: "Construtores",
    teoria: "Método especial chamado na criação do objeto (new). Serve para inicializar atributos. Tem o mesmo nome da classe.",
    exemplo_codigo: "class Carro { \n  Carro(String m) { \n    modelo = m; \n  }\n}",
    exemplo_explicado: ["Construtor: Sem tipo de retorno (nem void).", "Inicialização: Define valores iniciais.", "Nome: Igual à classe."],
    exercicios: [
      { tipo: "completar", pergunta: "Método de criação é o ____.", resposta: "construtor" },
      { tipo: "completar", pergunta: "Construtor tem o mesmo nome da ____.", resposta: "classe" },
      { tipo: "completar", pergunta: "Construtor ____ tem tipo de retorno.", resposta: "não" },
      { tipo: "completar", pergunta: "new Carro(____); // passando parâmetro", resposta: "\"Fusca\"" },
      { tipo: "completar", pergunta: "Construtor serve para ____ atributos.", resposta: "inicializar" },
      { tipo: "escrever", pergunta: "Construtor de 'Pessoa':", resposta: "Pessoa() {}" }
    ]
  },
  {
    id: 55, modulo: 6, titulo: "Palavra 'this'",
    teoria: "O 'this' referencia o próprio objeto atual. É usado para diferenciar atributos da classe de parâmetros com o mesmo nome.",
    exemplo_codigo: "void setNome(String nome) { \n  this.nome = nome; \n}",
    exemplo_explicado: ["this.nome: Atributo da classe.", "nome: Parâmetro do método.", "Uso: Evitar conflitos de nomes."],
    exercicios: [
      { tipo: "completar", pergunta: "Referência ao objeto atual é o ____.", resposta: "this" },
      { tipo: "completar", pergunta: "this.atributo acessa o campo da ____.", resposta: "classe" },
      { tipo: "completar", pergunta: "this evita conflitos de ____.", resposta: "nomes" },
      { tipo: "completar", pergunta: "Usado muito em ____ e sets.", resposta: "construtores" },
      { tipo: "completar", pergunta: "this.____ = x;", resposta: "campo" },
      { tipo: "escrever", pergunta: "this em Java:", resposta: "this" }
    ]
  },
  {
    id: 56, modulo: 6, titulo: "Encapsulamento (private/public)",
    teoria: "Protege os dados do objeto. Atributos ficam 'private' e acessados por métodos públicos (Getters e Setters).",
    exemplo_codigo: "private String senha; \npublic String getSenha() { return senha; }",
    exemplo_explicado: ["private: Ninguém fora da classe vê.", "public: Visível a todos.", "Segurança: Impede modificações indevidas."],
    exercicios: [
      { tipo: "completar", pergunta: "Proteção de dados é ____.", resposta: "encapsulamento" },
      { tipo: "completar", pergunta: "Atributos seguros devem ser ____.", resposta: "private" },
      { tipo: "completar", pergunta: "Métodos de leitura são ____.", resposta: "getters" },
      { tipo: "completar", pergunta: "Métodos de escrita são ____.", resposta: "setters" },
      { tipo: "completar", pergunta: "____ String nome; // oculto", resposta: "private" },
      { tipo: "escrever", pergunta: "Visibilidade restrita:", resposta: "private" }
    ]
  },
  {
    id: 57, modulo: 6, titulo: "Getters e Setters",
    teoria: "Métodos padronizados para acessar (get) e modificar (set) atributos privados.",
    exemplo_codigo: "public void setIdade(int i) { \n  if(i>0) idade = i; \n}",
    exemplo_explicado: ["Validação: O Setter pode conferir se o dado é válido.", "Controle: Define regras de acesso.", "Padrão: Nome da classe + get/set."],
    exercicios: [
      { tipo: "completar", pergunta: "Setter serve para ____ valor.", resposta: "definir" },
      { tipo: "completar", pergunta: "Getter serve para ____ valor.", resposta: "ler" },
      { tipo: "completar", pergunta: "Setters podem ter ____ de validação.", resposta: "lógicas" },
      { tipo: "completar", pergunta: "Padrão: get + ____.", resposta: "Atributo" },
      { tipo: "completar", pergunta: "public void setX(int x) { ____.x = x; }", resposta: "this" },
      { tipo: "escrever", pergunta: "Setter para 'nome':", resposta: "setNome" }
    ]
  },
  {
    id: 58, modulo: 6, titulo: "Sobrecarga de Métodos",
    teoria: "Ter métodos com o mesmo nome na classe, mas com parâmetros diferentes (tipo ou quantidade).",
    exemplo_codigo: "void log(String m); \nvoid log(int i);",
    exemplo_explicado: ["Mesmo Nome: log().", "Diferentes: tipos String vs int.", "Flexibilidade: O Java sabe qual chamar pelo argumento."],
    exercicios: [
      { tipo: "completar", pergunta: "Mesmo nome, parâmetros diferentes é ____.", resposta: "sobrecarga" },
      { tipo: "completar", pergunta: "Sobrecarga é polimorfismo em tempo de ____.", resposta: "compilação" },
      { tipo: "completar", pergunta: "O Java diferencia pelo ____ dos parâmetros.", resposta: "tipo" },
      { tipo: "completar", pergunta: "Construtores podem ser ____.", resposta: "sobrecarregados" },
      { tipo: "completar", pergunta: "____ igual, assinatura diferente.", resposta: "Nome" },
      { tipo: "escrever", pergunta: "Sobrecarga em Java:", resposta: "Overloading" }
    ]
  },
  {
    id: 59, modulo: 6, titulo: "Atributos Estáticos (static)",
    teoria: "Atributos 'static' pertencem à classe, não ao objeto. Todos os objetos compartilham o mesmo valor.",
    exemplo_codigo: "static int contador; // Contador global",
    exemplo_explicado: ["static: Memória única.", "Global: Afeta todas as instâncias.", "Chamada: Classe.atributo (sem precisar de new)."],
    exercicios: [
      { tipo: "completar", pergunta: "Atributo global é ____.", resposta: "static" },
      { tipo: "completar", pergunta: "static pertence à ____, não ao objeto.", resposta: "classe" },
      { tipo: "completar", pergunta: "Compartilhado por todas as ____.", resposta: "instâncias" },
      { tipo: "completar", pergunta: "Classe.____ // acessando", resposta: "atributo" },
      { tipo: "completar", pergunta: "Métodos main são ____.", resposta: "static" },
      { tipo: "escrever", pergunta: "Atributo compartilhado:", resposta: "static" }
    ]
  },
  {
    id: 60, modulo: 6, titulo: "Revisão de OO",
    teoria: "Dominamos Classes, Objetos, Construtores, Encapsulamento e Estáticos.",
    exemplo_codigo: "// Módulo 6 Concluído!",
    exemplo_explicado: ["Base: Sólida.", "Estrutura: Organizada.", "Próximo: Herança e Polimorfismo."],
    exercicios: [
      { tipo: "completar", pergunta: "Molde: ____.", resposta: "Class" },
      { tipo: "completar", pergunta: "Instância: ____.", resposta: "Object" },
      { tipo: "completar", pergunta: "Ação: ____.", resposta: "Method" },
      { tipo: "completar", pergunta: "Segurança: ____.", resposta: "Private" },
      { tipo: "completar", pergunta: "Referência própria: ____.", resposta: "this" },
      { tipo: "escrever", pergunta: "O que é Static?", resposta: "Pertence à classe" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 6 para o Supabase...");
  for (const aula of modulo6) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m6a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 6 Finalizado!");
}
semear();