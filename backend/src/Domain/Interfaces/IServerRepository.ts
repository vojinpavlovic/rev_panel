import DynamicEntity from "../Entities/DynamicEntity";
import PlayerEntity from "../Entities/PlayerEntity";

export default interface IServerRepository {
    getDynamic(): Promise<DynamicEntity | null>;
    getPlayers(): Promise<PlayerEntity | null>
}