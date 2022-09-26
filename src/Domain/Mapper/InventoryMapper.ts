import InventoryItem from "../Entities/InventoryItem";

export default (result: any): Array<InventoryItem> => {
    if (!result) {
        return [];
    } 

    result = JSON.parse(result)

    if (result.length <= 0) {
        return [];
    }

    const inventoryList: Array<InventoryItem> = [];

    for (const item of result) {
        inventoryList.push(new InventoryItem(item));
    }

    return inventoryList;
}