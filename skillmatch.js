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
