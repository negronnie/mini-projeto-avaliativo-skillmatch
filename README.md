# Mini-Projeto Avaliativo - Lucas Ponciano

Projeto Avaliativo do Módulo 1 do SCTEC, proposto na Semana 6 do curso.

A proposta é a de um sistema que avalia as habilidades de um candidato perante pelo menos três vagas, retornar um score de compatibilidade, bem como sugestão de estudo para as habilidades faltantes e recomendar a vaga mais adequada para o perfil do candidato.

Como forma de aplicar a programação orientada a objetos, eu optei por adicionar uma complexidade a mais, que é o tempo de experiência/nível de senioridade do candidato em cada habilidade (transformando o array simples de habilidade em uma classe instanciável).

## Dados do Projeto

- [Kanban do Github](https://github.com/users/negronnie/projects/1/views/1)
- [Link do Vídeo Explicativo]() 
- [Excalidraw](https://excalidraw.com/#json=di6Md_eibQXulNPJmvp9F,w2VnQ3ynsmw97KHCDSZngA)
- [Lista de Issues](https://github.com/negronnie/mini-projeto-avaliativo-skillmatch/issues?q=is%3Aissue)
- [Lista de Pull Requests](https://github.com/negronnie/mini-projeto-avaliativo-skillmatch/pulls?q=is%3Apr+is%3Aclosed)
- [Lista de Branches](https://github.com/negronnie/mini-projeto-avaliativo-skillmatch/branches) 

#### Tech Stack
- VS Code *(Editor de Código)*
- Code Runner *(Extensão)*

#### Como rodar
Basta rodar o código usando o *code runner*. Todos os parâmetros são <u>hard-coded</u> *(não há prompt ao usuário)*, mas <u>podem</u> ser alterados para fins de teste *(como avaliar o caso falso dos ifs)* 

## Entidades

### 1. Skill
A entidade <u>**Habilidade**</u> é composta por dois atributos carregados internamente pelo construtor:

- Nome da Habilidade;
- Nível (da experiência).

Onde o nível da experiência daquela habilidade é contada em unidades de anos. Podendo ser um número fracionado.

Para as habilidades, a quantidade de anos na habilidade enquadra o candidato como:

- Iniciante *(até 1 ano)*
- Intermediário *(até 2,5 anos)*
- Avançado *(até 5 anos)*
- Expert *(mais que 5 anos)*
 
### 2. Candidate
A entidade <u>**Candidato**</u> é composta por quatro artributos carregados internamente pelo construtor:

- Nome;
- Área de Interesse;
- Habilidades;
- Tempo de Experiência;

Além disso, a classe possui dois métodos, um para obter a habilidade do candidato: _`getSkill()`_, e outra para verificar se o candidato atende à um requisito da vaga: _`matchRequirement()`_.


### 3. Opportunity
A entidade <u>**Vaga**</u> é composta por quatro atributos carregados internamente pelo construtor:

- Empresa;
- Cargo;
- Habilidades;
- Nível.

### 4. RemoteOpportunity
A entidade <u>**Vaga Remota**</u> herda de Vaga, e adiciona os seguintes atributos:

- Remoto;
- Timezone;

A validação é feita dentro da classe Skill através do método _`experienceLevel( )`_

## Backfill

Foram instanciadas as classes do candidato e das três vagas disponíveis para avaliação.


## Critérios

### Percentual de Compatibilidade
Para a avaliação do percentual de compatibilidade, adotei a seguinte regra:

_`(requisitos atendidos / total de requisitos) * 100`_

<u>**Motivo da escolha:**</u> É a forma mais simples de se obter um percentual. 

### Habilidade faltante

É considerado habilidade faltante aquela que <u>**não existe**</u> ou <u>**não atende ao nível mínimo**</u> exigido pela vaga.

*Por exemplo:* Candidato possui a habilidade em **iniciante**, e a vaga exige **intermediário** -> O resultado é <u>**não atende**</u>, e isso impacta diretamente o cálculo da compatibilidade. 

### Vaga com maior Compatibilidade

Recomenda ao usuário a vaga com <u>**maior percentual**</u> de compatibilidade.

### Sugestão de estudo
A sugestão de estudo é gerada apenas para a vaga com maior compatibilidade.

A prioridade de sugestão é: _`Habilidade Faltante > Nível Insuficiente`_

## Orquestração

1. Uma conexão à uma API é simulada através de uma _`Promise`_ com um timeout de 3 segundos.
2. Um <u>array de objetos</u> com os dados de <u>*score*</u>, <u>*compatibilidade*</u> e <u>*lista de habilidades*</u> faltantes é iterado através de uma **função anônima** passada como _`callback`_.
3. Os dados são impressos no console. **requisito*
4. Esta lista de resultados é iterada mais uma vez, através de um _`reduce`_ que avalia se o valor do score atual é maior ou menor que o acumulador, com o objetivo de <u>retornar o maior valor entre todos</u> *(score de compatibilidade)*
5. A vaga <u>com maior score</u> é impressa na tela, junto com uma **sugestão de estudo** *(habilidade faltante do candidato na melhor vaga)*


## Uso de IA

Usei IA para as seguintes situações:

| Objetivo | Comentário |
| --- |  --- |
| Chegar às soluções usadas em _`matchRequirement()`_ e _`compareLevels()`_. | Eu não havia pensado em usar um índice de um array como forma de comparação. |
| Encontrar um uso para uma função com _closure_. |  Me parecia uma forma que faria sentido na aplicação sem adicionar muita complexidade. |
| Cálculo da vaga mais adequada. | Não havia passado na minha cabeça que o reduce poderia fazer comparações usando `>` e `<`. Foi bem mais fácil assim.  |
| Melhorar a apresentação do código no console. | Desenhar usando `-` e `=` já facilitou bastante na leitura, mas o padding interno de cada dado incluído nas _template strings_ das listas, deixou a apresentação parecida com uma tabela. **Não conhecia os métodos _`padEnd()`_ e _`padStart()`_.** |
 


### Código preditivo e Autocomplete
Em grande parte das implementações o próprio VS Code já fazia a sugestão de parte do código. O que tornou a codificação muito mais rápida e intuitiva.


## Kanban, Commits e Branches

Cada passo do processo de descoberta da solução foi documentada no <u>Kanban do GitHub</u>, que pode ser acessado [clicando aqui](https://github.com/users/negronnie/projects/1/views/1). 

Cada *issue* possuia um objetivo central, e era lançada inicialmente no *backlog*, e arrastadas para as colunas condizentes com o estado da atividade. Além disso cada issue dava origem à uma nova *branch*, onde o código era desenvolvido isolado da *main*.

Assim que o código desenvolvido ou parte dele estava pronto, era *commitado* e enviado ao GitHub. Quando a solução da issue era atingida, se abria um *pull request*. Inclusive, eu forcei conflitos de código, mantendo duas branches originadas da main ativas sem merge por um breve período.

- [Lista de issues](https://github.com/negronnie/mini-projeto-avaliativo-skillmatch/issues?q=is%3Aissue)
- [Lista de pull requests](https://github.com/negronnie/mini-projeto-avaliativo-skillmatch/pulls?q=is%3Apr+is%3Aclosed)
- [Lista de branches](https://github.com/negronnie/mini-projeto-avaliativo-skillmatch/branches) 

## Arquitetura Cliente-Servidor

A Arquitetura Cliente-Servidor é uma forma de comunicação estabelecida através de requisição e resposta. Onde o Cliente (Navegador, Aplicativo ou qualquer Software que consome uma API) faz requisições solicitando dados ao Servidor, que recebe as requisições, processa os dados e retorna uma resposta.


Neste código a Arquitetura Cliente-Servidor está representada através de duas funções:

1. O **"servidor"**

    Está representado na função `retrieveOpportunities` através da <u>Promise</u> que através do *resolve* e *reject* simulam a resposta de sucesso e falha do servidor.

2. O **"cliente"** 

    Está representado dentro do main. Antes do bloco try-catch possui uma simulação de conexão.
    A variável opportunitiesData recebe de forma assíncrona através do <u>await</u> na função retrieveOpportunities a resposta do "servidor". É como se o cliente disparasse uma requisição ao servidor. A resposta é gerada com atraso por causa do setTimeout. 