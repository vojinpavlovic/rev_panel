import InventoryItem from "./InventoryItem";
import VehicleEntity from "./VehicleEntity";

class UserEntity {
    public firstname: string | undefined;
    public lastname: string | undefined;
    public sex: string | undefined;
    public health: number;
    public pancir: number;
    public group: string | "user";
    public inventory: Array<InventoryItem> = [];
    public vehicles: Array<VehicleEntity> = [];

    constructor(result: any)
    {
        this.firstname = result[0].user_firstname ?? undefined;
        this.lastname = result[0].user_lastname ?? undefined;
        this.sex = result[0].user_sex ?? undefined;
        this.health = result[0].user_health ?? 200;
        this.pancir = result[0].user_pancir ?? 0;
        this.group = result[0].user_group ?? "user";
        this.inventory = this.createInventory(result[0].user_inventory);
        this.vehicles = this.createOwnedVehicles(result)
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

    private createOwnedVehicles(result: any): Array<VehicleEntity>{
        if (!result[0].vehicle_plate) {
            return [];
        }
        
        const vehicleArray: Array<VehicleEntity> = []

        for (const res of result) {
            vehicleArray.push(new VehicleEntity(res))
        }

        return vehicleArray;
    }
}

export default UserEntity;