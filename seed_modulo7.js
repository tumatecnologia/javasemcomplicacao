import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo7 = [
  {
    id: 61, modulo: 7, titulo: "Herança (extends)",
    teoria: "Herança permite que uma classe (filha) herde atributos e métodos de outra classe (pai). Usa-se a palavra 'extends'.",
    exemplo_codigo: "class Funcionario {} \nclass Gerente extends Funcionario {}",
    exemplo_explicado: ["extends: Indica a herança.", "Pai (Superclasse): Funcionario.", "Filha (Subclasse): Gerente."],
    exercicios: [
      { tipo: "completar", pergunta: "Para herdar usamos a palavra ____.", resposta: "extends" },
      { tipo: "completar", pergunta: "A classe que passa herança é a ____.", resposta: "superclasse" },
      { tipo: "completar", pergunta: "A classe que recebe herança é a ____.", resposta: "subclasse" },
      { tipo: "completar", pergunta: "Herança representa a relação '__ um'.", resposta: "é" },
      { tipo: "completar", pergunta: "class A ____ B { }", resposta: "extends" },
      { tipo: "escrever", pergunta: "Pai de subclasse:", resposta: "superclasse" }
    ]
  },
  {
    id: 62, modulo: 7, titulo: "Super e Sobrescrita",
    teoria: "'super' chama construtores ou métodos da classe pai. Sobrescrita (@Override) substitui o método do pai na filha.",
    exemplo_codigo: "class Pai { void falar() {} } \nclass Filha extends Pai { @Override void falar() {} }",
    exemplo_explicado: ["super(): Chama o construtor do pai.", "@Override: Indica que estamos mudando o método.", "Conexão: Filha usa super() para inicializar o pai."],
    exercicios: [
      { tipo: "completar", pergunta: "Chamar método do pai: ____.", resposta: "super" },
      { tipo: "completar", pergunta: "Substituir método do pai: ____.", resposta: "sobrescrita" },
      { tipo: "completar", pergunta: "Anotação de sobrescrita: @____.", resposta: "Override" },
      { tipo: "completar", pergunta: "Construtor do pai é chamado com super____.", resposta: "()" },
      { tipo: "completar", pergunta: "super deve ser a ____ linha do construtor.", resposta: "primeira" },
      { tipo: "escrever", pergunta: "Anotação de redefinição:", resposta: "@Override" }
    ]
  },
  {
    id: 63, modulo: 7, titulo: "Polimorfismo",
    teoria: "A capacidade de um objeto ser referenciado de várias formas. Um objeto da filha pode ser tratado como tipo da classe pai.",
    exemplo_codigo: "Funcionario f = new Gerente();",
    exemplo_explicado: ["Polimorfismo: 'Muitas formas'.", "Flexibilidade: Permite tratar tipos diferentes uniformemente.", "Variável: Tipo Pai, Objeto Filho."],
    exercicios: [
      { tipo: "completar", pergunta: "Polimorfismo significa muitas ____.", resposta: "formas" },
      { tipo: "completar", pergunta: "Pai p = new ____(); // filho", resposta: "Filho" },
      { tipo: "completar", pergunta: "Polimorfismo traz ____ ao código.", resposta: "flexibilidade" },
      { tipo: "completar", pergunta: "O método chamado é o do ____.", resposta: "objeto" },
      { tipo: "completar", pergunta: "O tipo da variável é o ____.", resposta: "pai" },
      { tipo: "escrever", pergunta: "Tipo do objeto:", resposta: "Filho" }
    ]
  },
  {
    id: 64, modulo: 7, titulo: "Classes Abstratas",
    teoria: "Classes que não podem ser instanciadas (não pode fazer 'new'). Servem apenas como base para herança. Podem ter métodos abstratos (sem corpo).",
    exemplo_codigo: "abstract class Animal {}",
    exemplo_explicado: ["abstract: Palavra-chave.", "new: Proibido.", "Método Abstrato: Filhas são obrigadas a implementar."],
    exercicios: [
      { tipo: "completar", pergunta: "Classe base não instanciável: ____.", resposta: "abstrata" },
      { tipo: "completar", pergunta: "Métodos abstratos ____ corpo.", resposta: "não tem" },
      { tipo: "completar", pergunta: "Filha de classe abstrata deve ____ os métodos.", resposta: "implementar" },
      { tipo: "completar", pergunta: "abstract class ____ {}", resposta: "Nome" },
      { tipo: "completar", pergunta: "Não pode usar ____ com classe abstrata.", resposta: "new" },
      { tipo: "escrever", pergunta: "Palavra para classe base:", resposta: "abstract" }
    ]
  },
  {
    id: 65, modulo: 7, titulo: "Interfaces",
    teoria: "Contratos que classes devem seguir. Interfaces definem 'o que' a classe faz, mas não 'como'. Métodos são públicos e abstratos por padrão.",
    exemplo_codigo: "interface Autenticavel { void login(); }",
    exemplo_explicado: ["interface: Palavra-chave.", "implements: Como classe usa interface.", "Contrato: Obriga implementação."],
    exercicios: [
      { tipo: "completar", pergunta: "Contrato de métodos: ____.", resposta: "interface" },
      { tipo: "completar", pergunta: "Classe usa interface com ____.", resposta: "implements" },
      { tipo: "completar", pergunta: "Métodos são ____ e abstratos.", resposta: "públicos" },
      { tipo: "completar", pergunta: "Pode implementar ____ interfaces.", resposta: "várias" },
      { tipo: "completar", pergunta: "Interface ____ métodos com corpo.", resposta: "não tem" },
      { tipo: "escrever", pergunta: "Palavra de contrato:", resposta: "implements" }
    ]
  },
  {
    id: 66, modulo: 7, titulo: "Interface vs Classe Abstrata",
    teoria: "Interfaces para contratos (múltiplos), Classes Abstratas para código base compartilhado (única herança).",
    exemplo_codigo: "class A extends B implements C, D {}",
    exemplo_explicado: ["extends: Apenas uma.", "implements: Várias.", "Escolha: Depende do cenário."],
    exercicios: [
      { tipo: "completar", pergunta: "extends é herança ____.", resposta: "única" },
      { tipo: "completar", pergunta: "implements permite herança ____.", resposta: "múltipla" },
      { tipo: "completar", pergunta: "Classe abstrata tem ____.", resposta: "estado" },
      { tipo: "completar", pergunta: "Interface é um ____.", resposta: "contrato" },
      { tipo: "completar", pergunta: "____ para código base.", resposta: "Abstract" },
      { tipo: "escrever", pergunta: "Herança única:", resposta: "extends" }
    ]
  },
  {
    id: 67, modulo: 7, titulo: "Palavra final",
    teoria: "final em classe: não pode ser herdada. final em método: não pode ser sobrescrito.",
    exemplo_codigo: "final class Segurança {}",
    exemplo_explicado: ["Bloqueio: Impede modificação.", "Segurança: Protege algoritmos.", "Finalização: Nenhuma filha."],
    exercicios: [
      { tipo: "completar", pergunta: "Classe final ____ ser herdada.", resposta: "não pode" },
      { tipo: "completar", pergunta: "Método final ____ ser sobrescrito.", resposta: "não pode" },
      { tipo: "completar", pergunta: "final impede ____.", resposta: "herança" },
      { tipo: "completar", pergunta: "Variável final é ____.", resposta: "constante" },
      { tipo: "completar", pergunta: "final class ____", resposta: "Nome" },
      { tipo: "escrever", pergunta: "Bloquear herança:", resposta: "final" }
    ]
  },
  {
    id: 68, modulo: 7, titulo: "Casting de Objetos",
    teoria: "Converter um objeto de um tipo para outro. Casting de pai para filho (downcasting) precisa de verificação.",
    exemplo_codigo: "if (p instanceof Filho) { Filho f = (Filho) p; }",
    exemplo_explicado: ["instanceof: Verifica o tipo.", "downcasting: Arriscado.", "Casting: (Tipo) objeto."],
    exercicios: [
      { tipo: "completar", pergunta: "Verificar tipo: ____.", resposta: "instanceof" },
      { tipo: "completar", pergunta: "Converter tipo: ____.", resposta: "casting" },
      { tipo: "completar", pergunta: "Downcasting precisa de ____.", resposta: "verificação" },
      { tipo: "completar", pergunta: "Casting usa ____.", resposta: "parênteses" },
      { tipo: "completar", pergunta: "____ p instanceof Filho", resposta: "if" },
      { tipo: "escrever", pergunta: "Operador de tipo:", resposta: "instanceof" }
    ]
  },
  {
    id: 69, modulo: 7, titulo: "Object: A Classe Pai de Todos",
    teoria: "Toda classe em Java herda automaticamente da classe `java.lang.Object`.",
    exemplo_codigo: "obj.toString(); \nobj.equals(outra);",
    exemplo_explicado: ["Object: Superclasse raiz.", "Métodos: toString, equals, hashCode.", "Herança: Implícita."],
    exercicios: [
      { tipo: "completar", pergunta: "Pai raiz: ____.", resposta: "Object" },
      { tipo: "completar", pergunta: "Pacote de Object: ____.", resposta: "java.lang" },
      { tipo: "completar", pergunta: "Método para string: ____.", resposta: "toString" },
      { tipo: "completar", pergunta: "Método para comparar: ____.", resposta: "equals" },
      { tipo: "completar", pergunta: "Toda classe ____ de Object.", resposta: "herda" },
      { tipo: "escrever", pergunta: "Classe raiz:", resposta: "Object" }
    ]
  },
  {
    id: 70, modulo: 7, titulo: "Revisão Herança/Polimorfismo",
    teoria: "Concluímos a base de OO: Herança, super, sobrescrita, polimorfismo, abstratas e interfaces.",
    exemplo_codigo: "// Módulo 7 Concluído!",
    exemplo_explicado: ["Abstração: Entendida.", "Reuso: Aplicado.", "Próximo: Exceções e Tratamento de Erros."],
    exercicios: [
      { tipo: "completar", pergunta: "extends = ____.", resposta: "herança" },
      { tipo: "completar", pergunta: "implements = ____.", resposta: "interface" },
      { tipo: "completar", pergunta: "Polimorfismo = ____.", resposta: "formas" },
      { tipo: "completar", pergunta: "final = ____.", resposta: "bloqueio" },
      { tipo: "completar", pergunta: "abstract = ____.", resposta: "contrato" },
      { tipo: "escrever", pergunta: "Raiz de tudo:", resposta: "Object" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 7 para o Supabase...");
  for (const aula of modulo7) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m7a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 7 Finalizado!");
}
semear();