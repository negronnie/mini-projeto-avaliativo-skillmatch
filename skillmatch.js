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
