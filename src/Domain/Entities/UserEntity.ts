import InventoryItem from "./ItemEntity";
import VehicleEntity from "./VehicleEntity";
import VehiclesMapper from "../Mapper/VehiclesMapper";
import InventoryMapper from "../Mapper/InventoryMapper";
import AccountEntity from "./AccountEntity";

class UserEntity {
    public firstname: string | undefined;
    public lastname: string | undefined;
    public sex: string | undefined;
    public health: number;
    public pancir: number;
    public group: string | "user";
    public accounts: AccountEntity;
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
        this.accounts = new AccountEntity(JSON.parse(result[0].user_accounts ?? "{}"));
        this.inventory = result[0].user_inventory ? InventoryMapper(result[0].user_inventory) : [];
        this.vehicles = result[0].vehicle_plate ? VehiclesMapper(result) : [];
    }
}

export default UserEntity;