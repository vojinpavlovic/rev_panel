class LevelEntity {
    public xp: number;
    public level: number;
    public needXP: number;
    public nextLevel: number;

    constructor(xp: number, level: number, needXP: number, nextLevel: number) {
        this.xp = xp;
        this.level = level;
        this.needXP = needXP;
        this.nextLevel = nextLevel;
    }
}

export default LevelEntity;