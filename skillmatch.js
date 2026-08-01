class Skill {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    experienceLevel() {
        const years = Number(this.level);
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