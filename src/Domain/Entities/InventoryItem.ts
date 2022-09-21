class UserInventoryEntity {
    public name: string;
    public count: number;
    public slot: number;
    public metadata?: any;

    constructor(result: any)
    {
        this.name = result.name;
        this.count = result.count;
        this.slot = result.slot;
        
        if (result.metadata) this.metadata = result.metadata;
    }
}

export default UserInventoryEntity;