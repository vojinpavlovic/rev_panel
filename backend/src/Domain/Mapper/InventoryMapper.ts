import InventoryItem from "../Entities/ItemEntity";

export default (result: any): Array<InventoryItem> => {
    if (!result) {
        return [];
    } 

    var inventory = JSON.parse(result.user_inventory)

    if (inventory.length <= 0) {
        return [];
    }

    const inventoryList: Array<InventoryItem> = [];

    for (const item of inventory) {
        inventoryList.push(new InventoryItem([item, result.itemsCache]));
    }

    return inventoryList;
}