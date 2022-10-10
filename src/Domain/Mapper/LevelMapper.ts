import MinToHour from "../../Common/MinToHour";
import LevelEntity from "../Entities/LevelEntity";

const HOURS = [3, 9, 18, 33, 66, 100, 120, 150, 240, 340, 500, 700, 900, 1000]

const getLevelProgress = (minutes: number): LevelEntity => {
    var playerHours: number = MinToHour(minutes);
    var currentLevel: number = 0

    for (let i = 0; i < HOURS.length; i++) {
        if (playerHours >= HOURS[i]) {
            currentLevel += 1;
        }
    }

    const currentXP = playerHours * 100
    const needXP = HOURS[currentLevel] ? HOURS[currentLevel] * 100 : playerHours * 100

    return new LevelEntity(currentXP, currentLevel, needXP, currentLevel + 1)
}

export default getLevelProgress;
