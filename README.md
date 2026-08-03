# Mini-Projeto Avaliativo - Lucas Ponciano

Projeto Avaliativo do Módulo 1 do SCTEC, proposto na Semana 6 do curso.

A proposta é a de um sistema que avalia as habilidades de um candidato perante pelo menos três vagas, retornar um score de compatibilidade, bem como sugestão de estudo para as habilidades faltantes e recomendar a vaga mais adequada para o perfil do candidato.

Como forma de aplicar de forma mais concisa a programação orientada a objetos (transformar a habilidade em uma classe), eu optei por adicionar uma complexidade a mais, que é o tempo de experiência/nível de senioridade do candidato em cada habilidade.

## Dados do Projeto

- Link do Kanban: [Kanban do Github](https://github.com/users/negronnie/projects/1/views/1)
- Link do Vídeo Explicativo: 

#### Tech Stack
- VS Code
- Code Runner (extensão)

## Entidades

### 1. Skill
A entidade Habilidade é composta por dois atributos carregados internamente pelo construtor:

- Nome da Habilidade;
- Nível (da experiência).

Onde o nível da experiência daquela habilidade é contada em unidades de anos. Podendo ser um número fracionado.

Para as habilidades, a quantidade de anos na habilidade enquadra o candidato como:

- Iniciante (até 1 ano)
- Intermediário (até 2,5 anos)
- Avançado (até 5 anos)
- Expert (mais que 5 anos)
 
### 2. Candidate
A entidade Candidato é composta por quatro artributos carregados internamente pelo construtor:

- Nome;
- Área de Interesse;
- Habilidades;
- Tempo de Experiência;

Além disso, a classe possui dois métodos, um para obter a habilidade do candidato _(getSkill)_, e outra para verificar se o candidato atende à um requisito da vaga _(matchRequirement)_.


### 3. Opportunity
A entidade Vaga é composta por quatro atributos carregados internamente pelo construtor:

- Empresa;
- Cargo;
- Habilidades;
- Nível.

### 4. RemoteOpportunity
A entidade Vaga Remota herda de Vaga, e adiciona os seguintes atributos:

- Remoto;
- Timezone;
É feito a validação é feita dentro da classe Skill através do método _experienceLevel_

## Backfill

Foram instanciadas as classes do candidato e das três vagas disponíveis para avaliação.


## Critérios

Para a avaliação do percentual de compatibilidade, adotei a seguinte regra:

`(requisitos atendidos / total de requisitos) * 100`