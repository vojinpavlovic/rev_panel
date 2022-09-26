import VehicleEntity from "../Entities/VehicleEntity";

export default (result: any): Array<VehicleEntity> => {
    if (!result[0].vehicle_plate) {
        return [];
    }

    const vehicles: Array<VehicleEntity> = []

    for (const res of result) {
        vehicles.push(new VehicleEntity(res))
    }

    return vehicles;
}