import { injectable } from "inversify";
import DynamicEntity from "../../Domain/Entities/DynamicEntity";
import PlayerEntity from "../../Domain/Entities/PlayerEntity";
import IServerRepository from "../../Domain/Interfaces/IServerRepository"

@injectable()
export default class ServerRepository implements IServerRepository {
    private baseUrl: string = "http://209.237.141.92:30120";

    private fetchData = async (endpoint: string): Promise<any> => {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: "GET",
            redirect: "follow",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }   
        })
        .then(res => res.json())
        .catch(err => null)

        return await response;
    }

    async getDynamic(): Promise<DynamicEntity | null> {
        const result = await this.fetchData('dynamic.json');

        if (!result) {
            return null;
        }

        const dynamicEntity: DynamicEntity = new DynamicEntity(result)

        return dynamicEntity
    } 

    async getPlayers(): Promise<any> {
        const result: any = await this.fetchData('players.json');
    
        if (!result) {
            return null;
        }

        if (result.length <= 0) {
            return null
        }


        const players: PlayerEntity[] = []

        for (const player of result) {
            players.push(new PlayerEntity(player))
        }

        return players
    }
}
