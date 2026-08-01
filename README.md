# Mini-Projeto Avaliativo [SCTEC Módulo 1, Semana 6] - Lucas Ponciano


## Entidades

### Skill
A entidade Habilidade é composta por dois atributos carregados internamente pelo construtor:

- Nome da Habilidade;
- Nível (da experiência).

Onde o nível da experiência daquela habilidade é contada em unidades de anos. Podendo ser um número fracionado.

Para as habilidades, a quantidade de anos na habilidade enquadra o candidato como:

- Iniciante (até 1 ano)
- Intermediário (até 2,5 anos)
- Avançado (até 5 anos)
- Expert (mais que 5 anos)
 
### Candidate
A entidade Candidato é composta por quatro artributos carregados internamente pelo construtor:

- Nome;
- Área de Interesse;
- Habilidades;
- Tempo de Experiência;

Além disso, a classe possui dois métodos, um para obter a habilidade do candidato _(getSkill)_, e outra para verificar se o candidato atende à um requisito da vaga _(matchRequirement)_.


### Opportunity
A entidade Vaga é composta por quatro atributos carregados internamente pelo construtor:

- Empresa;
- Cargo;
- Habilidades;
- Nível.

#### RemoteOpportunity
A entidade Vaga Remota herda de Vaga, e adiciona os seguintes atributos:

- Remoto;
- Timezone;
É feito a validação é feita dentro da classe Skill através do método _experienceLevel_

