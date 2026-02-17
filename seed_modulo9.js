import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo9 = [
  {
    id: 81, modulo: 9, titulo: "Introdução às Collections",
    teoria: "O Collections Framework oferece estruturas de dados dinâmicas (tamanho variável) para armazenar grupos de objetos. Diferente dos arrays, elas crescem automaticamente.",
    exemplo_codigo: "import java.util.ArrayList; \nArrayList<String> lista = new ArrayList<>();",
    exemplo_explicado: ["Framework: Conjunto de interfaces e classes.", "ArrayList: Lista baseada em array.", "Dinâmica: Tamanho não fixo."],
    exercicios: [
      { tipo: "completar", pergunta: "Listas dinâmicas crescem ____.", resposta: "automaticamente" },
      { tipo: "completar", pergunta: "Collections armazenam ____.", resposta: "objetos" },
      { tipo: "completar", pergunta: "Interface raiz é Collection ou ____.", resposta: "Map" },
      { tipo: "completar", pergunta: "Framework fica no pacote java.____.", resposta: "util" },
      { tipo: "completar", pergunta: "ArrayList substitui o ____.", resposta: "array" },
      { tipo: "escrever", pergunta: "Nome do framework:", resposta: "Collections" }
    ]
  },
  {
    id: 82, modulo: 9, titulo: "ArrayList",
    teoria: "A implementação mais comum da interface List. Permite acesso rápido por índice, mas é lento para inserir no meio.",
    exemplo_codigo: "lista.add(\"Java\"); \nlista.get(0);",
    exemplo_explicado: ["add(): Adiciona ao final.", "get(): Lê por índice.", "Velocidade: Rápida para ler."],
    exercicios: [
      { tipo: "completar", pergunta: "ArrayList é baseado em ____.", resposta: "array" },
      { tipo: "completar", pergunta: "Adicionar elemento: .____().", resposta: "add" },
      { tipo: "completar", pergunta: "Ler elemento: .____().", resposta: "get" },
      { tipo: "completar", pergunta: "ArrayList permite valores ____.", resposta: "duplicados" },
      { tipo: "completar", pergunta: "Tamanho da lista: .____().", resposta: "size" },
      { tipo: "escrever", pergunta: "Adicionar item:", resposta: "add" }
    ]
  },
  {
    id: 83, modulo: 9, titulo: "Generics <T>",
    teoria: "Generics permitem definir o tipo de objeto que a coleção vai armazenar, garantindo segurança de tipos em tempo de compilação.",
    exemplo_codigo: "ArrayList<Integer> numeros = new ArrayList<>();",
    exemplo_explicado: ["<Type>: Define o tipo.", "Segurança: Impede adicionar tipos errados.", "Integer: Wrapper para int."],
    exercicios: [
      { tipo: "completar", pergunta: "Tipo é definido entre ____.", resposta: "maior e menor" },
      { tipo: "completar", pergunta: "Generics garantem ____ de tipos.", resposta: "segurança" },
      { tipo: "completar", pergunta: "ArrayList<____> // wrapper para int", resposta: "Integer" },
      { tipo: "completar", pergunta: "Evita ____ cast no get.", resposta: "explicit" },
      { tipo: "completar", pergunta: "A sigla <T> significa ____.", resposta: "type" },
      { tipo: "escrever", pergunta: "Definir tipo:", resposta: "<>" }
    ]
  },
  {
    id: 84, modulo: 9, titulo: "Removendo Elementos",
    teoria: "Podemos remover elementos por índice ou pelo próprio objeto.",
    exemplo_codigo: "lista.remove(0); \nlista.remove(\"Java\");",
    exemplo_explicado: ["remove(int): Remove pela posição.", "remove(Object): Remove o primeiro objeto igual.", "size: Diminui automaticamente."],
    exercicios: [
      { tipo: "completar", pergunta: "Remover por posição: .____().", resposta: "remove" },
      { tipo: "completar", pergunta: "Remover por valor: .____().", resposta: "remove" },
      { tipo: "completar", pergunta: "Tamanho ____ após remover.", resposta: "diminui" },
      { tipo: "completar", pergunta: "lista.____(0); // tirar", resposta: "remove" },
      { tipo: "completar", pergunta: "remove(int) lança Exception se índice ____.", resposta: "inválido" },
      { tipo: "escrever", pergunta: "Remover item:", resposta: "remove" }
    ]
  },
  {
    id: 85, modulo: 9, titulo: "Iterando em Collections",
    teoria: "Como arrays, listas podem ser percorridas com for tradicional ou for-each.",
    exemplo_codigo: "for (String item : lista) { ... }",
    exemplo_explicado: ["for-each: Mais legível.", "size(): Usado no for tradicional.", "get(): Usado no for tradicional."],
    exercicios: [
      { tipo: "completar", pergunta: "A forma mais fácil de ler é ____.", resposta: "for-each" },
      { tipo: "completar", pergunta: "for tradicional usa .____().", resposta: "size" },
      { tipo: "completar", pergunta: "for ( ____ item : lista)", resposta: "String" },
      { tipo: "completar", pergunta: "Listas usam ____ índices.", resposta: "baseados em zero" },
      { tipo: "completar", pergunta: "Pode alterar lista no for-____?", resposta: "each" },
      { tipo: "escrever", pergunta: "Percorrer lista:", resposta: "for-each" }
    ]
  },
  {
    id: 86, modulo: 9, titulo: "Interface Set e HashSet",
    teoria: "Set não permite elementos duplicados. HashSet não garante ordem.",
    exemplo_codigo: "HashSet<String> conjunto = new HashSet<>();",
    exemplo_explicado: ["Duplicates: Não aceita.", "Order: Aleatória.", "add(): Retorna false se duplicado."],
    exercicios: [
      { tipo: "completar", pergunta: "Set não aceita ____.", resposta: "duplicados" },
      { tipo: "completar", pergunta: "HashSet não garante ____.", resposta: "ordem" },
      { tipo: "completar", pergunta: "HashSet é mais ____ que ArrayList.", resposta: "rápido" },
      { tipo: "completar", pergunta: "add() do set retorna ____.", resposta: "boolean" },
      { tipo: "completar", pergunta: "Set usa ____ para igualdade.", resposta: "equals" },
      { tipo: "escrever", pergunta: "Conjunto sem duplicatas:", resposta: "HashSet" }
    ]
  },
  {
    id: 87, modulo: 9, titulo: "Interface Map e HashMap",
    teoria: "Armazena pares Chave-Valor. Chaves são únicas.",
    exemplo_codigo: "HashMap<Integer, String> mapa = new HashMap<>();",
    exemplo_explicado: ["Key: Usada para buscar valor.", "Value: O dado armazenado.", "put(): Adiciona par."],
    exercicios: [
      { tipo: "completar", pergunta: "Map guarda Chave e ____.", resposta: "Valor" },
      { tipo: "completar", pergunta: "Chaves devem ser ____.", resposta: "únicas" },
      { tipo: "completar", pergunta: "Adicionar par: .____().", resposta: "put" },
      { tipo: "completar", pergunta: "Buscar valor: .____().", resposta: "get" },
      { tipo: "completar", pergunta: "Map<____, Valor> // chave", resposta: "Chave" },
      { tipo: "escrever", pergunta: "Adicionar par no mapa:", resposta: "put" }
    ]
  },
  {
    id: 88, modulo: 9, titulo: "Ordenando Collections",
    teoria: "Usamos `Collections.sort()` para ordenar listas.",
    exemplo_codigo: "Collections.sort(lista);",
    exemplo_explicado: ["Collections: Classe utilitária.", "sort(): Ordena a lista original.", "Comparable: Objetos devem ser ordenáveis."],
    exercicios: [
      { tipo: "completar", pergunta: "Ordenar lista: Collections.____().", resposta: "sort" },
      { tipo: "completar", pergunta: "Ordena a lista ____.", resposta: "original" },
      { tipo: "completar", pergunta: "Objetos precisam implementar ____.", resposta: "Comparable" },
      { tipo: "completar", pergunta: "Map ____ ordenado diretamente.", resposta: "não é" },
      { tipo: "completar", pergunta: "Sort usa ordem ____.", resposta: "natural" },
      { tipo: "escrever", pergunta: "Classe de utilitários:", resposta: "Collections" }
    ]
  },
  {
    id: 89, modulo: 9, titulo: "Wrapper Classes",
    teoria: "Classes que envolvem tipos primitivos para serem usados em Collections.",
    exemplo_codigo: "Integer i = 10; // Autoboxing",
    exemplo_explicado: ["int -> Integer", "double -> Double", "Autoboxing: Conversão automática."],
    exercicios: [
      { tipo: "completar", pergunta: "int vira ____.", resposta: "Integer" },
      { tipo: "completar", pergunta: "double vira ____.", resposta: "Double" },
      { tipo: "completar", pergunta: "Conversão automática é ____.", resposta: "autoboxing" },
      { tipo: "completar", pergunta: "Collections precisam de ____.", resposta: "objetos" },
      { tipo: "completar", pergunta: "char vira ____.", resposta: "Character" },
      { tipo: "escrever", pergunta: "Objeto de int:", resposta: "Integer" }
    ]
  },
  {
    id: 90, modulo: 9, titulo: "Revisão Collections",
    teoria: "Dominamos ArrayList, HashSet, HashMap, Generics e Ordenação.",
    exemplo_codigo: "// Módulo 9 Concluído!",
    exemplo_explicado: ["Dados: Dinâmicos.", "Estruturas: Eficientes.", "Próximo: JDBC / Banco de Dados."],
    exercicios: [
      { tipo: "completar", pergunta: "Tamanho flexível: ____.", resposta: "ArrayList" },
      { tipo: "completar", pergunta: "Sem duplicados: ____.", resposta: "HashSet" },
      { tipo: "completar", pergunta: "Chave-Valor: ____.", resposta: "HashMap" },
      { tipo: "completar", pergunta: "Ordenar: Collections.____().", resposta: "sort" },
      { tipo: "completar", pergunta: "Tipo seguro: ____.", resposta: "Generics" },
      { tipo: "escrever", pergunta: "Framework de dados:", resposta: "Collections" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 9 para o Supabase...");
  for (const aula of modulo9) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m9a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 9 Finalizado!");
}
semear();