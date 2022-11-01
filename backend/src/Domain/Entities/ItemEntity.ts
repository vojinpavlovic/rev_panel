class UserInventoryEntity {
    public name: string;
    public count: number;
    public slot: number;
    public metadata?: any;
    public label?: string;
    public weight: number = 0;

    constructor(result: any)
    {
        this.name = result[0].name;
        this.count = result[0].count;
        this.slot = result[0].slot;
        
        if (result[1] && result[1][this.name]) {
            this.label = result[1][this.name].label;
            this.weight = result[1][this.name].weight;
        }

        if (result.metadata) this.metadata = result.metadata;
    }
}

export default UserInventoryEntity;