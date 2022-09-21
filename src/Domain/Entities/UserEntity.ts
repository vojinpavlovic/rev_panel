import InventoryItem from "./InventoryItem";

class UserEntity {
    public firstname: string | undefined;
    public lastname: string | undefined;
    public sex: string | undefined;
    public health: number | 200;
    public pancir: number | 0;
    public group: string | "user";
    public inventory: Array<InventoryItem> = [];

    constructor(result: any)
    {
        this.firstname = result.firstname ?? undefined;
        this.lastname = result.lastname ?? undefined;
        this.sex = result.sex ?? undefined;
        this.health = result.health ?? 200;
        this.pancir = result.pancir ?? 0;
        this.group = result.group ?? "user";
        this.inventory = this.createInventory(result.inventory);

    }

    private createInventory(inventory: any): Array<InventoryItem> {
        if (!inventory) {
            return [];
        } 

        inventory = JSON.parse(inventory)

        if (inventory.length <= 0) {
            return [];
        }

        const inventoryArray: Array<InventoryItem> = [];
        
        for (const item of inventory) {
            inventoryArray.push(new InventoryItem(item));
        }

        return inventoryArray;
    }
}

export default UserEntity;