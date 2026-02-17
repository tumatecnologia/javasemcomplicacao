import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xwxkclrsbdozooqgfvnc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eGtjbHJzYmRvem9vcWdmdm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjM3MjYsImV4cCI6MjA4NjU5OTcyNn0.8YaAGMHrpGcdgUdnD96FgC7hbPFd6eJkL68nzr2H8ZM'
);

const modulo10 = [
  {
    id: 91, modulo: 10, titulo: "Introdução ao JDBC",
    teoria: "JDBC (Java Database Connectivity) é uma API que permite ao Java interagir com bancos de dados relacionais (SQL) de forma padronizada.",
    exemplo_codigo: "import java.sql.*;",
    exemplo_explicado: ["API: Conjunto de classes e interfaces.", "Driver: Ponte entre Java e Banco.", "SQL: Linguagem de consulta."],
    exercicios: [
      { tipo: "completar", pergunta: "JDBC significa Java Database ____.", resposta: "Connectivity" },
      { tipo: "completar", pergunta: "JDBC usa a linguagem ____.", resposta: "SQL" },
      { tipo: "completar", pergunta: "O pacote principal é java.____.", resposta: "sql" },
      { tipo: "completar", pergunta: "JDBC padroniza o ____.", resposta: "acesso" },
      { tipo: "completar", pergunta: "Precisa de um ____ para o banco.", resposta: "driver" },
      { tipo: "escrever", pergunta: "O que é JDBC?", resposta: "API de conexão" }
    ]
  },
  {
    id: 92, modulo: 10, titulo: "Estabelecendo Conexão",
    teoria: "Usamos a classe `DriverManager` para obter uma `Connection` com a URL do banco, usuário e senha.",
    exemplo_codigo: "Connection conn = DriverManager.getConnection(url, user, pass);",
    exemplo_explicado: ["DriverManager: Fábrica de conexões.", "URL: Endereço do banco.", "Connection: Objeto de sessão."],
    exercicios: [
      { tipo: "completar", pergunta: "Classe para gerenciar conexão: ____.", resposta: "DriverManager" },
      { tipo: "completar", pergunta: "Objeto de conexão: ____.", resposta: "Connection" },
      { tipo: "completar", pergunta: "URL de conexão começa com jdbc:____.", resposta: "mysql" },
      { tipo: "completar", pergunta: "getConnection precisa de 3 ____.", resposta: "parâmetros" },
      { tipo: "completar", pergunta: "Conexão pode lançar ____.", resposta: "SQLException" },
      { tipo: "escrever", pergunta: "Objeto de conexão:", resposta: "Connection" }
    ]
  },
  {
    id: 93, modulo: 10, titulo: "Statement e Queries (SELECT)",
    teoria: "Usamos `Statement` para executar comandos SQL. Para consultas (SELECT), usamos `executeQuery()`, que retorna um `ResultSet`.",
    exemplo_codigo: "ResultSet rs = stmt.executeQuery(\"SELECT * FROM users\");",
    exemplo_explicado: ["Statement: Executor de SQL.", "executeQuery(): Para leitura.", "ResultSet: Dados retornados."],
    exercicios: [
      { tipo: "completar", pergunta: "Objeto que executa SQL: ____.", resposta: "Statement" },
      { tipo: "completar", pergunta: "SELECT retorna um ____.", resposta: "ResultSet" },
      { tipo: "completar", pergunta: "Para ler SELECT: .____().", resposta: "executeQuery" },
      { tipo: "completar", pergunta: "ResultSet é semelhante a uma ____.", resposta: "tabela" },
      { tipo: "completar", pergunta: "stmt.____(\"SQL\")", resposta: "executeQuery" },
      { tipo: "escrever", pergunta: "Executar consulta:", resposta: "executeQuery" }
    ]
  },
  {
    id: 94, modulo: 10, titulo: "Processando ResultSet",
    teoria: "O `ResultSet` tem um cursor que inicia antes da primeira linha. Usamos `next()` para mover e ler os dados.",
    exemplo_codigo: "while (rs.next()) { \n  System.out.println(rs.getString(\"nome\")); \n}",
    exemplo_explicado: ["next(): Move para a próxima linha.", "getString(): Lê coluna por nome.", "getInt(): Lê coluna como inteiro."],
    exercicios: [
      { tipo: "completar", pergunta: "Mover cursor: .____().", resposta: "next" },
      { tipo: "completar", pergunta: "next() retorna um ____.", resposta: "boolean" },
      { tipo: "completar", pergunta: "Ler texto: .____(\"coluna\").", resposta: "getString" },
      { tipo: "completar", pergunta: "O cursor inicia ____ da primeira linha.", resposta: "antes" },
      { tipo: "completar", pergunta: "rs.____(\"id\") // ler numero", resposta: "getInt" },
      { tipo: "escrever", pergunta: "Próxima linha:", resposta: "next()" }
    ]
  },
  {
    id: 95, modulo: 10, titulo: "Inserir, Atualizar e Deletar",
    teoria: "Para INSERT, UPDATE e DELETE, usamos `executeUpdate()`, que retorna o número de linhas afetadas.",
    exemplo_codigo: "int rows = stmt.executeUpdate(\"UPDATE ...\");",
    exemplo_explicado: ["executeUpdate(): Para escrita.", "retorno: int (linhas afetadas).", "Segurança: Statement puro é vulnerável a SQL Injection."],
    exercicios: [
      { tipo: "completar", pergunta: "Comandos de escrita: .____().", resposta: "executeUpdate" },
      { tipo: "completar", pergunta: "executeUpdate retorna o número de ____.", resposta: "linhas" },
      { tipo: "completar", pergunta: "executeUpdate não retorna ____.", resposta: "ResultSet" },
      { tipo: "completar", pergunta: "CUIDADO com ____ Injection.", resposta: "SQL" },
      { tipo: "completar", pergunta: "Usado para INSERT, ____, DELETE.", resposta: "UPDATE" },
      { tipo: "escrever", pergunta: "Executar atualização:", resposta: "executeUpdate" }
    ]
  },
  {
    id: 96, modulo: 10, titulo: "PreparedStatement",
    teoria: "Versão segura e rápida do Statement. Permite usar parâmetros (?) para evitar SQL Injection e reutilizar consultas.",
    exemplo_codigo: "PreparedStatement pstmt = conn.prepareStatement(\"INSERT INTO u VALUES (?)\");",
    exemplo_explicado: ["?: Placeholder para dados.", "setXXX(): Define valores.", "Injection: Protegido."],
    exercicios: [
      { tipo: "completar", pergunta: "Versão segura: ____.", resposta: "PreparedStatement" },
      { tipo: "completar", pergunta: "Parâmetros usam o símbolo ____.", resposta: "?" },
      { tipo: "completar", pergunta: "Definir parâmetro: .____().", resposta: "set" },
      { tipo: "completar", pergunta: "pstmt é pré-____.", resposta: "compilado" },
      { tipo: "completar", pergunta: "pstmt.setString(____, \"João\");", resposta: "1" },
      { tipo: "escrever", pergunta: "Consultas seguras:", resposta: "PreparedStatement" }
    ]
  },
  {
    id: 97, modulo: 10, titulo: "Fechando Recursos",
    teoria: "Importante fechar ResultSet, Statement e Connection para liberar recursos do banco.",
    exemplo_codigo: "rs.close(); stmt.close(); conn.close();",
    exemplo_explicado: ["Leak: Não fechar causa lentidão.", "Ordem: Inversa da criação.", "finally: Bloco ideal para fechar."],
    exercicios: [
      { tipo: "completar", pergunta: "Liberar recursos: .____().", resposta: "close" },
      { tipo: "completar", pergunta: "Fechar na ordem ____.", resposta: "inversa" },
      { tipo: "completar", pergunta: "Pode ser feito no ____.", resposta: "finally" },
      { tipo: "completar", pergunta: "Evita memory ____.", resposta: "leak" },
      { tipo: "completar", pergunta: "conn.____();", resposta: "close" },
      { tipo: "escrever", pergunta: "Liberar conexão:", resposta: "close()" }
    ]
  },
  {
    id: 98, modulo: 10, titulo: "SQLException",
    teoria: "Todos os métodos JDBC lançam SQLException. Deve ser tratada com try-catch.",
    exemplo_codigo: "catch (SQLException e) { e.printStackTrace(); }",
    exemplo_explicado: ["Checked: Obriga tratamento.", "e.getMessage(): Detalhes do erro SQL."],
    exercicios: [
      { tipo: "completar", pergunta: "Erro JDBC: ____.", resposta: "SQLException" },
      { tipo: "completar", pergunta: "Pega a mensagem: .____().", resposta: "getMessage" },
      { tipo: "completar", pergunta: "SQLException é ____.", resposta: "checked" },
      { tipo: "completar", pergunta: "Tratado com ____.", resposta: "try-catch" },
      { tipo: "completar", pergunta: "e.____(); // mostrar rasto", resposta: "printStackTrace" },
      { tipo: "escrever", pergunta: "Exceção SQL:", resposta: "SQLException" }
    ]
  },
  {
    id: 99, modulo: 10, titulo: "Transações",
    teoria: "Agrupar comandos SQL. Se um falhar, todos devem ser desfeitos (rollback).",
    exemplo_codigo: "conn.setAutoCommit(false); \n// comandos... \nconn.commit();",
    exemplo_explicado: ["Commit: Salva mudanças.", "Rollback: Desfaz tudo.", "Integridade: Dados consistentes."],
    exercicios: [
      { tipo: "completar", pergunta: "Desativar commit auto: .____(false).", resposta: "setAutoCommit" },
      { tipo: "completar", pergunta: "Salvar alterações: .____().", resposta: "commit" },
      { tipo: "completar", pergunta: "Desfazer alterações: .____().", resposta: "rollback" },
      { tipo: "completar", pergunta: "Transações garantem ____.", resposta: "integridade" },
      { tipo: "completar", pergunta: "rollback() deve estar no ____.", resposta: "catch" },
      { tipo: "escrever", pergunta: "Salvar transação:", resposta: "commit" }
    ]
  },
  {
    id: 100, modulo: 10, titulo: "Revisão JDBC",
    teoria: "Aprendemos a conectar, consultar, atualizar e gerenciar transações no banco de dados.",
    exemplo_codigo: "// Módulo 10 Concluído!",
    exemplo_explicado: ["Banco: Integrado.", "SQL: Executado.", "Fim do Curso!"],
    exercicios: [
      { tipo: "completar", pergunta: "API SQL: ____.", resposta: "JDBC" },
      { tipo: "completar", pergunta: "Conexão: ____.", resposta: "Connection" },
      { tipo: "completar", pergunta: "Seguro: ____.", resposta: "PreparedStatement" },
      { tipo: "completar", pergunta: "Ler: ____.", resposta: "ResultSet" },
      { tipo: "completar", pergunta: "Desfazer: ____.", resposta: "rollback" },
      { tipo: "escrever", pergunta: "Parâmetro SQL:", resposta: "?" }
    ]
  }
];

async function semear() {
  console.log("🚀 Enviando Módulo 10 para o Supabase...");
  for (const aula of modulo10) {
    const { error: aulaError } = await supabase
      .from('aulas')
      .upsert({
        id: aula.id, modulo: aula.modulo, titulo: aula.titulo,
        conteudo: aula.teoria, exemplo_codigo: aula.exemplo_codigo,
        exemplo_explicado: aula.exemplo_explicado, is_free: true
      });

    if (aulaError) { console.error("❌ Erro aula " + aula.id, aulaError); continue; }

    const exs = aula.exercicios.map((ex, i) => ({
      id: "m10a" + aula.id + "e" + i,
      aula_id: aula.id,
      tipo: ex.tipo === "completar" ? "complete_code" : "write_code",
      pergunta: ex.pergunta,
      resposta_esperada: ex.resposta
    }));
    
    await supabase.from('exercicios').upsert(exs);
    console.log("✅ Aula " + aula.id + " OK");
  }
  console.log("🏁 Módulo 10 Finalizado!");
}
semear();