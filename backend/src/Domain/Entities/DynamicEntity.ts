class DynamicEntity {
    public clients: number = 0;
    public maxClients: number = 128

    constructor(result: any) {
        this.clients = result.clients;
        this.maxClients = result.sv_maxclients
    }
}

export default DynamicEntity