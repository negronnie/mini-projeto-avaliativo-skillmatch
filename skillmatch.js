class Skill {
    constructor(name, experienceYears) {
        this.name = name;
        this.experienceYears = experienceYears;
    }

    experienceLevel() {
        const years = Number(this.experienceYears);
        if (years > 0 && years <= 1) {
            return "Iniciante";
        } else if (years > 1 && years <= 2.5) {
            return "Intermediário";
        } else if (years > 2.5 && years <= 5) {
            return "Avançado";
        } else if (years > 5) {
            return "Expert";
        }
    }
}

class Candidate {
    constructor(name, interestArea, skills, experience) {
        this.name = name;
        this.interestArea = interestArea;
        this.skills = skills;
        this.experience = experience;
    }

    getSkill(skillName) {
        return this.skills.find(skill => skill.name === skillName);
    }

    matchRequirement(requirement) {
        const skill = this.getSkill(requirement.skillName);
        if (!skill) {
            return false;
        }
        return compareLevels(skill.experienceLevel(), requirement.minExperienceLevel) >= 0;
    }
}

function compareLevels(levelA, levelB) {
    const levels = ["Iniciante", "Intermediário", "Avançado", "Expert"];
    return levels.indexOf(levelA) - levels.indexOf(levelB);
}

class Opportunity {
    constructor(company, role, skills, level) {
        this.company = company;
        this.role = role;
        this.skills = skills;
        this.level = level;
    }
}

class RemoteOpportunity extends Opportunity {
    constructor(company, role, skills, level, timezone) {
        super(company, role, skills, level);
        this.remote = true;
        this.timezone = timezone;
    }
}

// data backfill
const candidate = new Candidate(
    'Lucas', 
    'Fullstack', 
    [
        new Skill('JavaScript', 1),
        new Skill('HTML', 3),
        new Skill('CSS', 3),
        new Skill('Git', 3),
        new Skill('Lógica de Programação', 1),
        new Skill('Java', 1),
        new Skill('Spring Boot', 0.8),
        new Skill('MySQL', 1),
        new Skill('PostgreSQL', 0.7),
        new Skill('REST APIs', 0.8),
        new Skill('Flyway', 0.8),
        new Skill('Docker', 1.4),
        new Skill('Swagger', 0.6),
        new Skill('YAML', 1.4),
        new Skill('JUnit', 0.9),
        new Skill('Mockito', 0.9),
        new Skill('Hamcrest', 0.9),
        new Skill('TestContainers', 0.8),
        new Skill('RestAssured', 0.8),
        new Skill('JaCoCo', 0.8),
        new Skill('SonarQube', 1),
        new Skill('Product Management', 1.8),
        new Skill('Scrum', 1.8),
        new Skill('Kanban', 1.8),
        new Skill('UX-UI', 1.8),
    ],
    3
)

const opportunities = [
    new Opportunity(
        'Senai SC',
        'Desenvolvedor Fullstack',
        [
            { skillName: 'JavaScript', minExperienceLevel: 'Iniciante' },
            { skillName: 'HTML', minExperienceLevel: 'Intermediário' },
            { skillName: 'CSS', minExperienceLevel: 'Intermediário' },
            { skillName: 'Git', minExperienceLevel: 'Intermediário' },
            { skillName: 'Lógica de Programação', minExperienceLevel: 'Intermediário' },
            { skillName: 'Java', minExperienceLevel: 'Iniciante' },
            { skillName: 'Spring Boot', minExperienceLevel: 'Iniciante' },
            { skillName: 'MySQL', minExperienceLevel: 'Iniciante' },
            { skillName: 'PostgreSQL', minExperienceLevel: 'Iniciante' }  
        ],
        'Júnior'
    ),

    new Opportunity(
        'Nubank',
        'Desenvolvedor React',
        [
            {skillName: 'JavaScript', minExperienceLevel: 'Iniciante'},
            {skillName: 'React', minExperienceLevel: 'Iniciante'},
            {skillName: 'HTML', minExperienceLevel: 'Intermediário'},
            {skillName: 'CSS', minExperienceLevel: 'Intermediário'},
            {skillName: 'JavaScript', minExperienceLevel: 'Iniciante'},
            {skillName: 'JavaScript', minExperienceLevel: 'Iniciante'},
        ],
        'Júnior'
    ),

    new RemoteOpportunity(
        'iFood',
        'Desenvolvedor Backend',
        [
            {skillName: 'Java', minExperienceLevel: 'Avançado'},
            {skillName: 'Spring Boot', minExperienceLevel: 'Intermediário'},
            {skillName: 'MySQL', minExperienceLevel: 'Intermediário'},
            {skillName: 'PostgreSQL', minExperienceLevel: 'Intermediário'},
            {skillName: 'Docker', minExperienceLevel: 'Intermediário'},
            {skillName: 'Kafka', minExperienceLevel: 'Intermediário'},
            {skillName: 'AWS', minExperienceLevel: 'Intermediário'},
            {skillName: 'OAuth2', minExperienceLevel: 'Intermediário'},
            {skillName: 'JWT', minExperienceLevel: 'Intermediário'},
            {skillName: 'Redis', minExperienceLevel: 'Intermediário'},
            {skillName: 'Jenkins', minExperienceLevel: 'Intermediário'},
            {skillName: 'Kubernetes', minExperienceLevel: 'Intermediário'},
        ],
        'Pleno',
        'America/Sao_Paulo'
    )
]

function calculateMatchScore(candidate, opportunity) {
    const matched = opportunity.skills.filter(requirement => candidate.matchRequirement(requirement));
    const score = (matched.length / opportunity.skills.length) * 100;
    return score;
}

function classifyCompatibility(score) {
    if (score >= 80) {
        return "Alta compatibilidade";
    } else if (score >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}

function listMissingSkills(candidate, opportunity) {
    return opportunity.skills
        .filter((requirement) => !candidate.matchRequirement(requirement))
        .map((requirement) => {
            const skill = candidate.getSkill(requirement.skillName);
            if(!skill) {
                return { 
                    skillName: requirement.skillName, 
                    minExperienceLevel: requirement.minExperienceLevel,
                    reason: 'missing'
                };
            } else {
                return { 
                    skillName: requirement.skillName, 
                    experienceLevel: skill.experienceLevel(), 
                    minExperienceLevel: requirement.minExperienceLevel,
                    reason: 'insufficient'
                };
            }
        });
}

function showMissingSkill(item) {
    if(item.reason === 'missing') {
        return `Habilidade: ${item.skillName} - Habilidade Ausente`;
    } else {
        return `Habilidade: ${item.skillName} - Nível Insuficiente (Possui: ${item.experienceLevel}, Exige: ${item.minExperienceLevel})`;
    }
}

function buildResult(candidate, opportunities) {
    return opportunities.map((opportunity) => {
        const score = calculateMatchScore(candidate, opportunity);
        return {
            opportunity: opportunity,
            score: score,
            compatibility: classifyCompatibility(score),
            missingSkills: listMissingSkills(candidate, opportunity)
        }
    })
}

function findBestOpportunities(results){
    return results.reduce((best, current) => {
        if(current.score > best.score) {
            return current;
        }
        return best;
    });
}

function studySubjectsSuggestion(bestResult) {
    const missingSkills = bestResult.missingSkills;
    if(missingSkills.length === 0) {
        return "O candidato já atende a todos os requisitos da vaga mais adequada.";
    }

    let prioritySubject = missingSkills[0];

    for(const item of missingSkills) {
        if(item.reason === 'missing') {
            prioritySubject = item;
            break;
        }
    }

    if (prioritySubject.reason === 'missing') {
        return `Estude: ${prioritySubject.skillName}, que você ainda não conhece e.`;
    }
    return `Aprofunde-se em: ${prioritySubject.skillName}, que está em nível insuficiente (Possui: ${prioritySubject.experienceLevel}, Exige: ${prioritySubject.minExperienceLevel}).`;
}