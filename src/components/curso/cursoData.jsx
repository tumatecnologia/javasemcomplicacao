export const COURSE_MODULES = [
  {
    id: 1,
    title: "Fundamentos do Java",
    icon: "BookOpen",
    free: true,
    lessons: [
      {
        id: 1,
        title: "Introdução ao Java - Instalação e Primeiro Programa",
        content: `# Introdução ao Java

Java é uma linguagem de programação orientada a objetos criada por James Gosling na Sun Microsystems em 1995.

## Instalando o JDK (Java Development Kit)

### Passo a Passo:

1. **Baixar o JDK**
   - Acesse: https://www.oracle.com/java/technologies/downloads/
   - Escolha a versão mais recente do JDK
   - Baixe o instalador para seu sistema operacional (Windows, Mac, Linux)

2. **Instalar o JDK**
   - Execute o instalador baixado
   - Siga as instruções na tela
   - Anote o caminho de instalação (ex: C:\\Program Files\\Java\\jdk-21)

3. **Configurar Variáveis de Ambiente (Windows)**
   - Clique com botão direito em "Meu Computador" > Propriedades
   - Configurações Avançadas do Sistema > Variáveis de Ambiente
   - Criar variável JAVA_HOME: C:\\Program Files\\Java\\jdk-21
   - Adicionar ao PATH: %JAVA_HOME%\\bin

4. **Verificar Instalação**
   - Abra o terminal/prompt de comando
   - Digite: \`java -version\`
   - Digite: \`javac -version\`
   - Se aparecer a versão, está instalado corretamente!

## Primeiro Programa: Olá Mundo

### Código Completo:

\`\`\`java
public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linha 1:** \`public class OlaMundo {\`
- \`public\` = modificador de acesso, significa que a classe é pública e pode ser acessada de qualquer lugar
- \`class\` = palavra-chave que declara uma classe em Java
- \`OlaMundo\` = nome da classe (DEVE ser igual ao nome do arquivo)
- \`{\` = abre o bloco de código da classe

**Linha 2:** \`public static void main(String[] args) {\`
- \`public\` = método público, acessível de fora da classe
- \`static\` = método pertence à classe, não ao objeto (pode ser chamado sem criar instância)
- \`void\` = método não retorna nenhum valor
- \`main\` = nome do método principal, ponto de entrada do programa
- \`String[] args\` = parâmetro que recebe argumentos da linha de comando (array de strings)
- \`{\` = abre o bloco do método

**Linha 3:** \`System.out.println("Olá, Mundo!");\`
- \`System\` = classe do pacote java.lang (automática)
- \`out\` = objeto de saída padrão (console)
- \`println\` = método para imprimir e pular linha
- \`"Olá, Mundo!"\` = string (texto) a ser impressa
- \`;\` = ponto e vírgula obrigatório ao final de cada instrução

**Linha 4:** \`}\`
- Fecha o bloco do método main

**Linha 5:** \`}\`
- Fecha o bloco da classe

## Como Salvar e Executar

### 1. Salvando o Arquivo

**IMPORTANTE - Case Sensitive:**
- Java é **CASE SENSITIVE** (diferencia maiúsculas de minúsculas)
- \`OlaMundo\` é diferente de \`olamundo\` ou \`OLAMUNDO\`
- O nome do arquivo DEVE ser EXATAMENTE igual ao nome da classe
- Arquivo: \`OlaMundo.java\` (não pode ser olamundo.java ou OlaMUNDO.java)

**Passos:**
1. Abra um editor de texto (Notepad++, VS Code, Sublime, etc)
2. Cole o código acima
3. Salve como: \`OlaMundo.java\`
4. Salve em uma pasta de sua preferência (ex: C:\\java\\primeiro)

### 2. Compilando

Abra o terminal na pasta onde salvou e execute:

\`\`\`bash
javac OlaMundo.java
\`\`\`

- \`javac\` = compilador Java
- Se não houver erros, será criado o arquivo \`OlaMundo.class\` (bytecode)

### 3. Executando

\`\`\`bash
java OlaMundo
\`\`\`

- \`java\` = comando para executar
- Não coloque .class no final!
- Saída esperada: \`Olá, Mundo!\`

## Nomenclaturas e Convenções em Java

### 1. Classes
- **PascalCase** (primeira letra de cada palavra maiúscula)
- Exemplos: \`MinhaClasse\`, \`CalculadoraSimples\`, \`ContaBancaria\`

### 2. Métodos e Variáveis
- **camelCase** (primeira letra minúscula, demais palavras com inicial maiúscula)
- Exemplos: \`calcularMedia\`, \`nomeCompleto\`, \`idadeUsuario\`

### 3. Constantes
- **UPPER_CASE** (tudo maiúsculo com underscore)
- Exemplos: \`PI\`, \`TAXA_JUROS\`, \`VALOR_MAXIMO\`

### 4. Pacotes
- **lowercase** (tudo minúsculo)
- Exemplos: \`com.minhaempresa.projeto\`, \`util\`, \`model\`

### 5. Regras Gerais
- Nomes devem começar com letra, $ ou _
- Não usar palavras reservadas (public, class, int, etc)
- Nomes descritivos (evitar \`a\`, \`x\`, \`temp\`)
- Use inglês quando possível

## Testando seu Ambiente

Crie este programa para testar:

\`\`\`java
public class TesteAmbiente {
    public static void main(String[] args) {
        System.out.println("Java funcionando!");
        System.out.println("Versão: " + System.getProperty("java.version"));
    }
}
\`\`\`

Compile e execute. Se mostrar a versão, está tudo OK!`
      },
      {
        id: 2,
        title: "Variáveis e Tipos Primitivos",
        content: `# Variáveis e Tipos Primitivos

## O que é uma Variável?

Uma variável é um espaço na memória RAM que armazena um valor durante a execução do programa.

## Tipos Primitivos em Java

Java possui 8 tipos primitivos:

| Tipo | Tamanho | Faixa | Exemplo |
|------|---------|-------|---------|
| byte | 8 bits | -128 a 127 | \`byte idade = 25;\` |
| short | 16 bits | -32.768 a 32.767 | \`short ano = 2025;\` |
| int | 32 bits | -2 bilhões a 2 bilhões | \`int populacao = 1000000;\` |
| long | 64 bits | -9 quintilhões a 9 quintilhões | \`long distancia = 999999999L;\` |
| float | 32 bits | ~6-7 dígitos decimais | \`float preco = 19.99f;\` |
| double | 64 bits | ~15 dígitos decimais | \`double pi = 3.14159265;\` |
| char | 16 bits | 1 caractere Unicode | \`char letra = 'A';\` |
| boolean | 1 bit | true ou false | \`boolean ativo = true;\` |

## Código Exemplo Completo:

\`\`\`java
public class TiposPrimitivos {
    public static void main(String[] args) {
        byte idade = 25;
        short ano = 2025;
        int populacao = 1000000;
        long distancia = 999999999L;
        float preco = 19.99f;
        double pi = 3.14159265;
        char inicial = 'A';
        boolean ativo = true;
        
        System.out.println("Idade: " + idade);
        System.out.println("Ano: " + ano);
        System.out.println("População: " + populacao);
        System.out.println("Distância: " + distancia);
        System.out.println("Preço: " + preco);
        System.out.println("Pi: " + pi);
        System.out.println("Inicial: " + inicial);
        System.out.println("Ativo: " + ativo);
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linha 1:** \`public class TiposPrimitivos {\`
- Declara a classe pública chamada TiposPrimitivos

**Linha 2:** \`public static void main(String[] args) {\`
- Método principal onde o programa inicia

**Linha 3:** \`byte idade = 25;\`
- \`byte\` = tipo de dado (inteiro pequeno, 8 bits)
- \`idade\` = nome da variável (camelCase)
- \`=\` = operador de atribuição
- \`25\` = valor atribuído
- \`;\` = finaliza a instrução

**Linha 4:** \`short ano = 2025;\`
- Declara variável do tipo short (16 bits)
- Armazena o valor 2025

**Linha 5:** \`int populacao = 1000000;\`
- Tipo int (mais usado para números inteiros)
- Pode armazenar até cerca de 2 bilhões

**Linha 6:** \`long distancia = 999999999L;\`
- Tipo long para números muito grandes
- **IMPORTANTE:** Deve terminar com \`L\` ou \`l\`

**Linha 7:** \`float preco = 19.99f;\`
- Tipo float para números decimais
- **IMPORTANTE:** Deve terminar com \`f\` ou \`F\`

**Linha 8:** \`double pi = 3.14159265;\`
- Tipo double (mais preciso que float)
- Padrão para números decimais

**Linha 9:** \`char inicial = 'A';\`
- Tipo char armazena 1 caractere
- Usa aspas simples \`'A'\` (não duplas)

**Linha 10:** \`boolean ativo = true;\`
- Tipo boolean só aceita \`true\` ou \`false\`
- Usado para condições

**Linhas 12-19:** \`System.out.println(...)\`
- Imprime cada variável concatenada com texto
- \`+\` concatena texto com valor da variável

## Regras de Nomenclatura

✅ **CORRETO:**
- \`idade\`, \`nomeCompleto\`, \`salarioLiquido\`
- \`_contador\`, \`$valor\`
- Case sensitive: \`idade\` ≠ \`Idade\` ≠ \`IDADE\`

❌ **ERRADO:**
- \`123nome\` (não pode começar com número)
- \`meu-nome\` (não pode usar hífen)
- \`class\`, \`int\`, \`public\` (palavras reservadas)

## Como Salvar e Testar

1. Salve como \`TiposPrimitivos.java\`
2. Compile: \`javac TiposPrimitivos.java\`
3. Execute: \`java TiposPrimitivos\`
4. Verifique se todos os valores são impressos corretamente`
      },
      {
        id: 3,
        title: "Operadores Aritméticos",
        content: `# Operadores Aritméticos

Os operadores aritméticos realizam operações matemáticas básicas.

## Operadores Disponíveis:
- \`+\` Adição
- \`-\` Subtração
- \`*\` Multiplicação
- \`/\` Divisão
- \`%\` Módulo (resto da divisão)

## Código Completo:

\`\`\`java
public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        int soma = a + b;
        int subtracao = a - b;
        int multiplicacao = a * b;
        int divisao = a / b;
        int modulo = a % b;
        
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + divisao);
        System.out.println("Módulo: " + modulo);
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linha 1:** \`public class OperadoresAritmeticos {\`
- Declara classe pública com nome OperadoresAritmeticos

**Linha 2:** \`public static void main(String[] args) {\`
- Método principal onde programa inicia

**Linha 3:** \`int a = 10;\`
- \`int\` = tipo inteiro
- \`a\` = nome da variável
- \`= 10\` = atribui valor 10

**Linha 4:** \`int b = 3;\`
- Declara segunda variável inteira com valor 3

**Linha 6:** \`int soma = a + b;\`
- Cria variável soma
- \`a + b\` = operador de adição (10 + 3 = 13)
- Resultado armazenado em soma

**Linha 7:** \`int subtracao = a - b;\`
- \`a - b\` = operador de subtração (10 - 3 = 7)

**Linha 8:** \`int multiplicacao = a * b;\`
- \`a * b\` = operador de multiplicação (10 * 3 = 30)

**Linha 9:** \`int divisao = a / b;\`
- \`a / b\` = divisão inteira (10 / 3 = 3, sem decimais)
- **IMPORTANTE:** divisão entre int resulta em int

**Linha 10:** \`int modulo = a % b;\`
- \`a % b\` = módulo, resto da divisão (10 % 3 = 1)
- 10 dividido por 3 = 3, sobra 1

**Linhas 12-18:** \`System.out.println(...)\`
- Imprime os resultados no console
- \`+\` concatena texto com valor da variável`
      },
      {
        id: 4,
        title: "Entrada de Dados com Scanner",
        content: `# Entrada de Dados com Scanner

Scanner é uma classe Java que permite ler dados digitados pelo usuário.

## Código Completo:

\`\`\`java
import java.util.Scanner;

public class EntradaDados {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite seu nome: ");
        String nome = sc.nextLine();
        
        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();
        
        System.out.print("Digite sua altura (ex: 1.75): ");
        double altura = sc.nextDouble();
        
        System.out.println("\\n=== DADOS INFORMADOS ===");
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade + " anos");
        System.out.println("Altura: " + altura + " m");
        
        sc.close();
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linha 1:** \`import java.util.Scanner;\`
- \`import\` = importa uma classe de outro pacote
- \`java.util\` = pacote onde Scanner está
- \`Scanner\` = classe a ser importada
- Sem import, precisaria escrever java.util.Scanner sempre

**Linha 3:** \`public class EntradaDados {\`
- Declara a classe principal

**Linha 4:** \`public static void main(String[] args) {\`
- Método principal

**Linha 5:** \`Scanner sc = new Scanner(System.in);\`
- \`Scanner\` = tipo da variável (classe Scanner)
- \`sc\` = nome da variável (pode ser qualquer nome)
- \`new\` = cria novo objeto
- \`Scanner(System.in)\` = construtor que recebe entrada padrão (teclado)

**Linha 7:** \`System.out.print("Digite seu nome: ");\`
- \`print\` = imprime sem pular linha (diferente de println)
- Exibe mensagem para usuário

**Linha 8:** \`String nome = sc.nextLine();\`
- \`String\` = tipo texto
- \`sc.nextLine()\` = lê linha completa digitada pelo usuário
- Aguarda usuário digitar e pressionar Enter
- Valor digitado armazenado em nome

**Linha 10:** \`System.out.print("Digite sua idade: ");\`
- Exibe mensagem pedindo idade

**Linha 11:** \`int idade = sc.nextInt();\`
- \`sc.nextInt()\` = lê número inteiro
- Se usuário digitar texto, gera erro
- Valor convertido para int automaticamente

**Linha 13:** \`System.out.print("Digite sua altura (ex: 1.75): ");\`
- Mensagem com exemplo para orientar usuário

**Linha 14:** \`double altura = sc.nextDouble();\`
- \`sc.nextDouble()\` = lê número decimal
- Aceita vírgula ou ponto dependendo da localização do sistema

**Linha 16:** \`System.out.println("\\n=== DADOS INFORMADOS ===");\`
- \`\\n\` = quebra de linha (pula 1 linha)
- Cria separação visual

**Linhas 17-19:** Impressão dos dados
- Concatena texto com variáveis usando \`+\`

**Linha 21:** \`sc.close();\`
- Fecha o Scanner
- Libera recursos do sistema
- Boa prática sempre fechar

## Métodos do Scanner:
- \`nextLine()\` - lê linha completa (String)
- \`next()\` - lê apenas uma palavra
- \`nextInt()\` - lê número inteiro
- \`nextDouble()\` - lê número decimal
- \`nextBoolean()\` - lê true/false`
      },
      {
        id: 5,
        title: "Estrutura if-else",
        content: `# Estrutura Condicional if-else

Estruturas condicionais permitem que o programa tome decisões.

## Código Completo:

\`\`\`java
import java.util.Scanner;

public class Condicional {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();
        
        if (idade >= 18) {
            System.out.println("Você é maior de idade!");
            System.out.println("Pode tirar CNH.");
        } else {
            System.out.println("Você é menor de idade.");
            System.out.println("Ainda não pode tirar CNH.");
        }
        
        System.out.println("Programa finalizado.");
        sc.close();
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linha 1:** \`import java.util.Scanner;\`
- Importa classe Scanner para leitura

**Linha 3:** \`public class Condicional {\`
- Declara classe Condicional

**Linha 4:** \`public static void main(String[] args) {\`
- Método principal

**Linha 5:** \`Scanner sc = new Scanner(System.in);\`
- Cria objeto Scanner para ler entrada

**Linha 7:** \`System.out.print("Digite sua idade: ");\`
- Exibe mensagem sem pular linha

**Linha 8:** \`int idade = sc.nextInt();\`
- Lê idade digitada e armazena em variável

**Linha 10:** \`if (idade >= 18) {\`
- \`if\` = palavra-chave para condição
- \`(idade >= 18)\` = expressão booleana (true ou false)
- \`>=\` = operador "maior ou igual"
- Se idade for 18 ou mais, entra no bloco
- \`{\` = inicia bloco de código do if

**Linha 11:** \`System.out.println("Você é maior de idade!");\`
- Executado APENAS se condição for verdadeira
- Dentro do bloco if

**Linha 12:** \`System.out.println("Pode tirar CNH.");\`
- Também executado apenas se idade >= 18

**Linha 13:** \`} else {\`
- \`}\` = fecha bloco if
- \`else\` = caso contrário (se condição for falsa)
- \`{\` = abre bloco else

**Linha 14:** \`System.out.println("Você é menor de idade.");\`
- Executado APENAS se idade < 18
- Alternativa ao if

**Linha 15:** \`System.out.println("Ainda não pode tirar CNH.");\`
- Também no bloco else

**Linha 16:** \`}\`
- Fecha bloco else

**Linha 18:** \`System.out.println("Programa finalizado.");\`
- Executado SEMPRE, independente da condição
- Está fora dos blocos if/else

**Linha 19:** \`sc.close();\`
- Fecha Scanner

## Operadores de Comparação:
- \`==\` igual a
- \`!=\` diferente de
- \`>\` maior que
- \`<\` menor que
- \`>=\` maior ou igual
- \`<=\` menor ou igual`
      },
      {
        id: 6,
        title: "Estrutura switch-case",
        content: `# Estrutura switch-case

Switch-case é usado quando há múltiplas opções para verificar.

## Código Completo:

\`\`\`java
import java.util.Scanner;

public class MenuSwitch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("=== MENU ===");
        System.out.println("1 - Cadastrar");
        System.out.println("2 - Consultar");
        System.out.println("3 - Excluir");
        System.out.println("4 - Sair");
        System.out.print("Escolha uma opção: ");
        
        int opcao = sc.nextInt();
        
        switch (opcao) {
            case 1:
                System.out.println("Você escolheu: Cadastrar");
                break;
            case 2:
                System.out.println("Você escolheu: Consultar");
                break;
            case 3:
                System.out.println("Você escolheu: Excluir");
                break;
            case 4:
                System.out.println("Saindo do programa...");
                break;
            default:
                System.out.println("Opção inválida!");
        }
        
        sc.close();
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linhas 1-5:** Importação e declaração
- Importa Scanner e declara classe e método main

**Linhas 7-12:** Menu
- Exibe opções numeradas para usuário
- print na última linha para ficar na mesma linha da entrada

**Linha 14:** \`int opcao = sc.nextInt();\`
- Lê número digitado pelo usuário

**Linha 16:** \`switch (opcao) {\`
- \`switch\` = palavra-chave para múltiplas escolhas
- \`(opcao)\` = variável a ser testada
- Compara valor de opcao com cada case
- \`{\` = inicia bloco switch

**Linha 17:** \`case 1:\`
- \`case\` = palavra-chave para uma opção
- \`1\` = valor a ser comparado com opcao
- \`:\` = separador (não é ponto e vírgula)
- Se opcao == 1, executa código abaixo

**Linha 18:** \`System.out.println("Você escolheu: Cadastrar");\`
- Código executado se opcao for 1

**Linha 19:** \`break;\`
- \`break\` = sai do switch
- **MUITO IMPORTANTE:** sem break, continua executando próximos cases
- Previne "fall-through" (executar casos seguintes)

**Linhas 20-22:** \`case 2:\`
- Similar ao case 1
- Verifica se opcao == 2
- Imprime mensagem e sai com break

**Linhas 23-25:** \`case 3:\`
- Opção 3 de Excluir

**Linhas 26-28:** \`case 4:\`
- Opção 4 de Sair

**Linha 29:** \`default:\`
- \`default\` = caso padrão (opcional)
- Executado se nenhum case corresponder
- Similar ao else em if-else
- Não precisa de break (já é o último)

**Linha 30:** \`System.out.println("Opção inválida!");\`
- Mensagem de erro para valores não previstos

**Linha 31:** \`}\`
- Fecha bloco switch

## Quando usar switch?
✅ Múltiplas condições com valores exatos
✅ Comparação de igualdade (==)
✅ Tipos: int, char, String, enum

❌ Não use para intervalos (>, <)
❌ Não use para expressões complexas`
      },
      {
        id: 7,
        title: "Laço for Básico",
        content: `# Laço for

O laço for repete um bloco de código um número determinado de vezes.

## Código Completo:

\`\`\`java
public class LacoFor {
    public static void main(String[] args) {
        System.out.println("Contando de 1 a 10:");
        
        for (int i = 1; i <= 10; i++) {
            System.out.println("Número: " + i);
        }
        
        System.out.println("\\nContando de 10 a 1:");
        
        for (int j = 10; j >= 1; j--) {
            System.out.println("Número: " + j);
        }
        
        System.out.println("\\nTabuada do 5:");
        
        for (int k = 1; k <= 10; k++) {
            int resultado = 5 * k;
            System.out.println("5 x " + k + " = " + resultado);
        }
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linhas 1-3:** Estrutura básica
- Declara classe e método main
- Imprime título

**Linha 5:** \`for (int i = 1; i <= 10; i++) {\`
- \`for\` = palavra-chave para repetição
- \`(\` = abre parênteses da estrutura
- **PARTE 1:** \`int i = 1\` = INICIALIZAÇÃO
  - Declara variável i (contador)
  - Atribui valor inicial 1
  - Executado UMA VEZ no início
- \`;\` = separa as três partes
- **PARTE 2:** \`i <= 10\` = CONDIÇÃO
  - Verifica se i é menor ou igual a 10
  - Testado ANTES de cada repetição
  - Se false, sai do loop
- \`;\` = separa segunda e terceira parte
- **PARTE 3:** \`i++\` = INCREMENTO
  - Aumenta i em 1 (i = i + 1)
  - Executado DEPOIS de cada repetição
- \`)\` = fecha parênteses
- \`{\` = inicia bloco do for

**Linha 6:** \`System.out.println("Número: " + i);\`
- Código repetido 10 vezes
- i assume valores 1, 2, 3, ..., 10
- Concatena texto com valor atual de i

**Linha 7:** \`}\`
- Fecha bloco do for
- Volta para incremento e testa condição novamente

**Linha 9:** \`System.out.println("\\nContando de 10 a 1:");\`
- Pula linha e exibe novo título

**Linha 11:** \`for (int j = 10; j >= 1; j--) {\`
- Nova variável j (i só existe dentro primeiro for)
- Inicia em 10
- Condição: j >= 1 (enquanto maior ou igual)
- \`j--\` = DECREMENTO (diminui 1 a cada repetição)

**Linha 12:** Imprime j em ordem decrescente
- j assume valores 10, 9, 8, ..., 1

**Linha 17:** \`for (int k = 1; k <= 10; k++) {\`
- Terceiro for, variável k

**Linha 18:** \`int resultado = 5 * k;\`
- Dentro do for
- Calcula 5 multiplicado por k
- Nova variável criada a cada repetição

**Linha 19:** Imprime tabuada
- Mostra multiplicação e resultado

## Estrutura do for:
\`\`\`
for (inicialização; condição; incremento) {
    // código repetido
}
\`\`\`

1. Executa inicialização (1x)
2. Testa condição
3. Se true: executa bloco
4. Executa incremento
5. Volta para passo 2`
      },
      {
        id: 8,
        title: "Laço while",
        content: `# Laço while

While repete enquanto condição for verdadeira. Use quando não sabe quantas repetições serão necessárias.

## Código Completo:

\`\`\`java
import java.util.Scanner;

public class LacoWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("=== Contador Simples ===");
        int contador = 1;
        
        while (contador <= 5) {
            System.out.println("Contagem: " + contador);
            contador++;
        }
        
        System.out.println("\\n=== Somador ===");
        System.out.println("Digite números para somar (0 para parar):");
        
        int soma = 0;
        int numero = -1;
        
        while (numero != 0) {
            System.out.print("Número: ");
            numero = sc.nextInt();
            soma = soma + numero;
        }
        
        System.out.println("Soma total: " + soma);
        sc.close();
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linhas 1-5:** Estrutura inicial
- Importa Scanner, declara classe e método

**Linha 7:** \`System.out.println("=== Contador Simples ===");\`
- Exibe título do primeiro exemplo

**Linha 8:** \`int contador = 1;\`
- Declara e inicializa variável contador
- Valor inicial 1
- **IMPORTANTE:** inicializar ANTES do while

**Linha 10:** \`while (contador <= 5) {\`
- \`while\` = palavra-chave para loop
- \`(contador <= 5)\` = CONDIÇÃO
- Testa condição ANTES de cada execução
- Se false, NÃO entra no loop
- \`{\` = inicia bloco

**Linha 11:** \`System.out.println("Contagem: " + contador);\`
- Executado enquanto condição for true
- Imprime valor atual do contador

**Linha 12:** \`contador++;\`
- Incrementa contador (adiciona 1)
- **CRÍTICO:** sem isso, loop seria infinito!
- contador passa de 1→2→3→4→5
- Quando chegar a 6, condição vira false

**Linha 13:** \`}\`
- Fecha bloco while
- Volta para linha 10 e testa condição novamente

**Linha 15:** Novo título para segundo exemplo

**Linha 16:** \`System.out.println("Digite números para somar (0 para parar):");\`
- Instrução para usuário

**Linha 18:** \`int soma = 0;\`
- Acumulador que guarda soma total
- Inicia em 0

**Linha 19:** \`int numero = -1;\`
- Variável para número digitado
- Inicializa com -1 (qualquer valor diferente de 0)
- Garante que while execute pelo menos uma vez

**Linha 21:** \`while (numero != 0) {\`
- \`!=\` = operador "diferente de"
- Loop continua enquanto número NÃO for 0
- Quando usuário digitar 0, para

**Linha 22:** \`System.out.print("Número: ");\`
- Solicita entrada dentro do loop

**Linha 23:** \`numero = sc.nextInt();\`
- Lê número digitado
- Atualiza variável numero

**Linha 24:** \`soma = soma + numero;\`
- Adiciona número digitado à soma
- soma acumula todos os valores
- Se numero for 0, adiciona 0 e depois sai

**Linha 27:** \`System.out.println("Soma total: " + soma);\`
- Após sair do loop, exibe resultado

## Diferença for vs while:
- **for:** quando sabe nº de repetições
- **while:** quando condição define fim`
      },
      {
        id: 9,
        title: "Laço do-while",
        content: `# Laço do-while

Do-while é como while, mas SEMPRE executa pelo menos uma vez (testa condição no final).

## Código Completo:

\`\`\`java
import java.util.Scanner;

public class LacoDoWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcao;
        
        do {
            System.out.println("\\n=== MENU ===");
            System.out.println("1 - Opção A");
            System.out.println("2 - Opção B");
            System.out.println("3 - Opção C");
            System.out.println("0 - Sair");
            System.out.print("Escolha: ");
            
            opcao = sc.nextInt();
            
            if (opcao == 1) {
                System.out.println("Você escolheu A");
            } else if (opcao == 2) {
                System.out.println("Você escolheu B");
            } else if (opcao == 3) {
                System.out.println("Você escolheu C");
            } else if (opcao == 0) {
                System.out.println("Saindo...");
            } else {
                System.out.println("Opção inválida!");
            }
            
        } while (opcao != 0);
        
        System.out.println("Programa encerrado.");
        sc.close();
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linhas 1-5:** Estrutura inicial
- Importa Scanner, declara classe e main

**Linha 6:** \`int opcao;\`
- Declara variável opcao SEM inicializar
- Será atribuída dentro do do-while
- Precisa existir antes do do-while para ser usada na condição

**Linha 8:** \`do {\`
- \`do\` = palavra-chave que inicia loop
- \`{\` = abre bloco
- **DIFERENÇA DO WHILE:** executa código ANTES de testar
- Garante execução mínima de 1 vez

**Linhas 9-14:** Menu
- Exibe opções para usuário
- Como está dentro do do, repete a cada ciclo

**Linha 16:** \`opcao = sc.nextInt();\`
- Lê escolha do usuário
- Atribui à variável opcao
- Primeira atribuição (declarada linha 6)

**Linhas 18-19:** \`if (opcao == 1) {\`
- Verifica se usuário escolheu 1
- Se sim, executa código do if

**Linhas 20-23:** \`} else if (opcao == 2) {\`
- Se não foi 1, testa se foi 2
- \`else if\` = senão se

**Linhas 24-26:** Opção 3

**Linhas 27-29:** Opção 0 (sair)
- Exibe mensagem de saída
- Loop ainda vai continuar uma vez (testa depois)

**Linhas 30-32:** \`} else {\`
- Se nenhuma opção válida
- Informa erro ao usuário

**Linha 34:** \`} while (opcao != 0);\`
- \`}\` = fecha bloco do do
- \`while (opcao != 0)\` = CONDIÇÃO testada NO FINAL
- \`!=\` = diferente de
- Se opcao for diferente de 0, REPETE
- Se opcao for 0, SAI do loop
- \`;\` = ponto e vírgula obrigatório no final do while

**Linha 36:** \`System.out.println("Programa encerrado.");\`
- Executado após sair do loop
- Só imprime quando usuário digitar 0

## Fluxo do do-while:
1. Executa bloco (SEMPRE, 1ª vez)
2. Testa condição NO FINAL
3. Se true: volta para passo 1
4. Se false: sai do loop

## Quando usar do-while?
✅ Menus (sempre mostrar pelo menos 1x)
✅ Validação de entrada (pedir até ser válido)
✅ Garantir execução mínima

## while vs do-while:
- **while:** pode NÃO executar (testa antes)
- **do-while:** SEMPRE executa 1x (testa depois)`
      },
      {
        id: 10,
        title: "Arrays Unidimensionais",
        content: `# Arrays Unidimensionais

Array é uma estrutura que armazena múltiplos valores do mesmo tipo em sequência.

## Código Completo:

\`\`\`java
public class ArrayBasico {
    public static void main(String[] args) {
        double[] notas = {8.5, 7.0, 9.5, 6.0};
        
        System.out.println("=== NOTAS ===");
        for (int i = 0; i < notas.length; i++) {
            System.out.println("Nota " + (i+1) + ": " + notas[i]);
        }
        
        double soma = 0;
        for (double n : notas) {
            soma = soma + n;
        }
        double media = soma / notas.length;
        
        System.out.println("\\nSoma: " + soma);
        System.out.println("Média: " + media);
        
        double maior = notas[0];
        for (int i = 1; i < notas.length; i++) {
            if (notas[i] > maior) {
                maior = notas[i];
            }
        }
        System.out.println("Maior nota: " + maior);
    }
}
\`\`\`

### Explicação Linha por Linha:

**Linhas 1-2:** Estrutura básica

**Linha 3:** \`double[] notas = {8.5, 7.0, 9.5, 6.0};\`
- \`double[]\` = tipo array de double
- \`[]\` = indica que é array (colchetes)
- \`notas\` = nome da variável array
- \`=\` = atribuição
- \`{8.5, 7.0, 9.5, 6.0}\` = inicialização com valores
- \`{\` e \`}\` = delimitam elementos
- Vírgula separa cada valor
- Array criado com 4 elementos
- Índices: 0, 1, 2, 3 (sempre começa em 0)

**Linha 5:** Título

**Linha 6:** \`for (int i = 0; i < notas.length; i++) {\`
- Loop tradicional para percorrer array
- \`i = 0\` = índice inicial (primeiro elemento)
- \`i < notas.length\` = condição
  - \`notas.length\` = propriedade que retorna tamanho (4)
  - Não é método, não tem ()
  - Loop vai de 0 até 3
- \`i++\` = próximo índice

**Linha 7:** \`System.out.println("Nota " + (i+1) + ": " + notas[i]);\`
- \`notas[i]\` = acessa elemento na posição i
- \`[i]\` = operador de índice
- i=0 → notas[0] = 8.5
- i=1 → notas[1] = 7.0
- \`(i+1)\` = para exibir "Nota 1" ao invés de "Nota 0"
- Parênteses necessários para calcular antes de concatenar

**Linha 10:** \`double soma = 0;\`
- Variável acumuladora
- Começa em 0 para somar valores

**Linha 11:** \`for (double n : notas) {\`
- **FOR-EACH** (for melhorado)
- \`double n\` = variável temporária
- \`:\` = lê-se "em" ou "para cada"
- \`notas\` = array a percorrer
- Em cada iteração, n recebe um elemento
- Mais simples quando não precisa do índice

**Linha 12:** \`soma = soma + n;\`
- Adiciona valor atual à soma
- n assume: 8.5, depois 7.0, depois 9.5, depois 6.0

**Linha 14:** \`double media = soma / notas.length;\`
- Calcula média
- \`notas.length\` = 4 elementos
- soma / 4 = média

**Linha 19:** \`double maior = notas[0];\`
- Assume primeiro elemento como maior
- \`notas[0]\` = 8.5
- Estratégia: comparar com demais

**Linha 20:** \`for (int i = 1; i < notas.length; i++) {\`
- Loop começa em 1 (segundo elemento)
- Já comparou o primeiro

**Linha 21:** \`if (notas[i] > maior) {\`
- Testa se elemento atual é maior
- \`>\` = maior que

**Linha 22:** \`maior = notas[i];\`
- Atualiza maior se encontrar valor superior

## Declaração de Arrays:
\`\`\`java
// Forma 1: com valores
int[] nums = {10, 20, 30};

// Forma 2: definir tamanho
int[] nums = new int[5]; // 5 elementos (todos 0)

// Forma 3: declarar depois
int[] nums;
nums = new int[3];
\`\`\`

## Índices:
- Primeiro: array[0]
- Último: array[array.length - 1]`
      }
    ]
  },
  {
    id: 2,
    title: "Estruturas de Dados Básicas",
    icon: "Database",
    free: true,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 11 + i,
      title: `Arrays e Matrizes ${i + 1}`,
      content: `# Arrays - Parte ${i + 1}

## Exemplo Prático ${i + 1}

\`\`\`java
// Código de exemplo para arrays
int[] numeros = {1, 2, 3, 4, 5};
for (int n : numeros) {
    System.out.println(n * 2);
}
\`\`\``
    }))
  },
  {
    id: 3,
    title: "Strings e Manipulação",
    icon: "Type",
    free: true,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 21 + i,
      title: `Strings ${i + 1}`,
      content: `# Manipulação de Strings - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
String texto = "Java";
System.out.println(texto.toUpperCase());
System.out.println(texto.length());
\`\`\``
    }))
  },
  {
    id: 4,
    title: "Programação Orientada a Objetos I",
    icon: "Box",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 31 + i,
      title: `POO Fundamentos ${i + 1}`,
      content: `# Classes e Objetos - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
class Pessoa {
    String nome;
    int idade;
    void apresentar() {
        System.out.println("Olá, sou " + nome);
    }
}
\`\`\``
    }))
  },
  {
    id: 5,
    title: "POO Avançada",
    icon: "Layers",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 41 + i,
      title: `Herança e Polimorfismo ${i + 1}`,
      content: `# Herança - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
class Animal {
    void comer() { System.out.println("Comendo"); }
}
class Cachorro extends Animal {
    void latir() { System.out.println("Au au"); }
}
\`\`\``
    }))
  },
  {
    id: 6,
    title: "Exceções",
    icon: "ShieldAlert",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 51 + i,
      title: `Tratamento de Exceções ${i + 1}`,
      content: `# Exceções - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
try {
    int resultado = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Erro: " + e);
}
\`\`\``
    }))
  },
  {
    id: 7,
    title: "Collections",
    icon: "FolderTree",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 61 + i,
      title: `Collections Framework ${i + 1}`,
      content: `# Collections - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
List<String> nomes = new ArrayList<>();
nomes.add("Ana");
nomes.add("Bruno");
\`\`\``
    }))
  },
  {
    id: 8,
    title: "Lambda e Streams",
    icon: "Zap",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 71 + i,
      title: `Lambda e Streams ${i + 1}`,
      content: `# Programação Funcional - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
List<Integer> nums = Arrays.asList(1,2,3,4,5);
nums.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);
\`\`\``
    }))
  },
  {
    id: 9,
    title: "Threads e Concorrência",
    icon: "Cpu",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 81 + i,
      title: `Multithreading ${i + 1}`,
      content: `# Threads - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
Thread t = new Thread(() -> {
    System.out.println("Executando thread");
});
t.start();
\`\`\``
    }))
  },
  {
    id: 10,
    title: "Design Patterns",
    icon: "Puzzle",
    free: false,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: 91 + i,
      title: `Padrões de Projeto ${i + 1}`,
      content: `# Design Patterns - Parte ${i + 1}

## Exemplo Prático

\`\`\`java
// Singleton Pattern
class Config {
    private static Config instance;
    private Config() {}
    public static Config getInstance() {
        if (instance == null) instance = new Config();
        return instance;
    }
}
\`\`\``
    }))
  },
  {
    id: 11,
    title: "Projeto Final - Calculadora",
    icon: "Calculator",
    free: false,
    lessons: [
      {
        id: 101,
        title: "Projeto Calculadora - Parte 1",
        content: `# Projeto: Calculadora

## Objetivo
Criar uma calculadora completa com interface de usuário.

## Funcionalidades
- Operações básicas (+, -, *, /)
- Histórico de cálculos
- Limpar display
- Memória (M+, M-, MR, MC)

## Exemplo de Estrutura

\`\`\`java
class Calculadora {
    private double memoria = 0;
    private List<String> historico = new ArrayList<>();
    
    public double somar(double a, double b) {
        double resultado = a + b;
        historico.add(a + " + " + b + " = " + resultado);
        return resultado;
    }
}
\`\`\``
      },
      {
        id: 102,
        title: "Projeto Calculadora - Parte 2",
        content: `# Calculadora - Interface

## Interface Gráfica com Swing

\`\`\`java
import javax.swing.*;
class CalculadoraGUI extends JFrame {
    private JTextField display;
    private Calculadora calc = new Calculadora();
    // ... implementação
}
\`\`\``
      }
    ]
  },
  {
    id: 12,
    title: "Projeto Final - Agenda",
    icon: "BookUser",
    free: false,
    lessons: [
      {
        id: 103,
        title: "Projeto Agenda - Parte 1",
        content: `# Projeto: Agenda de Contatos

## Objetivo
Sistema para gerenciar contatos com CRUD completo.

## Funcionalidades
- Adicionar contato
- Editar contato
- Remover contato
- Buscar contato
- Listar todos

## Estrutura

\`\`\`java
class Contato {
    private String nome;
    private String telefone;
    private String email;
}

class Agenda {
    private List<Contato> contatos = new ArrayList<>();
    
    public void adicionar(Contato c) {
        contatos.add(c);
    }
    
    public List<Contato> buscar(String nome) {
        // implementação
    }
}
\`\`\``
      },
      {
        id: 104,
        title: "Projeto Agenda - Parte 2",
        content: `# Agenda - Persistência

## Salvar em Arquivo

\`\`\`java
import java.io.*;

class AgendaPersistente {
    public void salvar(List<Contato> contatos, String arquivo) throws IOException {
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(arquivo))) {
            oos.writeObject(contatos);
        }
    }
}
\`\`\``
      }
    ]
  },
  {
    id: 13,
    title: "Projeto Final - Calendário/Relógio",
    icon: "Clock",
    free: false,
    lessons: [
      {
        id: 105,
        title: "Projeto Calendário - Parte 1",
        content: `# Projeto: Calendário com Relógio Automático

## Objetivo
Calendário completo com relógio em tempo real.

## Funcionalidades
- Exibir data e hora atual
- Atualização automática do relógio
- Navegação entre meses
- Destacar dia atual
- Adicionar eventos/compromissos

## Relógio Automático

\`\`\`java
import java.time.*;
import java.time.format.DateTimeFormatter;

class RelogioAutomatico extends Thread {
    private boolean rodando = true;
    
    @Override
    public void run() {
        while (rodando) {
            LocalDateTime agora = LocalDateTime.now();
            DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
            System.out.print("\\r" + agora.format(fmt));
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {}
        }
    }
}
\`\`\``
      },
      {
        id: 106,
        title: "Projeto Calendário - Parte 2",
        content: `# Calendário - Interface Gráfica

## Implementação Visual

\`\`\`java
import javax.swing.*;
import java.awt.*;

class CalendarioGUI extends JFrame {
    private JLabel labelRelogio;
    private JPanel painelCalendario;
    private RelogioAutomatico relogio;
    
    public CalendarioGUI() {
        setTitle("Calendário");
        setSize(800, 600);
        setLayout(new BorderLayout());
        
        // Relógio no topo
        labelRelogio = new JLabel();
        labelRelogio.setFont(new Font("Arial", Font.BOLD, 24));
        add(labelRelogio, BorderLayout.NORTH);
        
        // Grid do calendário
        painelCalendario = new JPanel(new GridLayout(7, 7));
        add(painelCalendario, BorderLayout.CENTER);
        
        // Iniciar relógio
        relogio = new RelogioAutomatico();
        relogio.start();
    }
}
\`\`\``
      }
    ]
  }
];

export const FREE_LESSON_LIMIT = 30;

export function getAllLessons() {
  const lessons = [];
  COURSE_MODULES.forEach(module => {
    module.lessons.forEach(lesson => {
      lessons.push({ ...lesson, moduleId: module.id, moduleTitle: module.title });
    });
  });
  return lessons;
}

export function getLessonById(id) {
  const allLessons = getAllLessons();
  return allLessons.find(l => l.id === id);
}

export function isLessonFree(lessonId) {
  return lessonId <= FREE_LESSON_LIMIT;
}