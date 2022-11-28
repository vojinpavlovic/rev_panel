class PlayerEntity {
    public name: string;
    public ping: number;

    constructor(result: any) {
        this.name = result.name;
        this.ping = result.ping
    }
}

export default PlayerEntity