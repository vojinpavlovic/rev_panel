class VehicleEntity {
    public name: string;
    public plate: string;
    public img: string | null | undefined;
    public engineHP: number;
    constructor(result: any)
    {
        this.name = result.vehicle_name;
        this.engineHP = result.vehicle_health.engine ? result.vehicle_health.engineHP : 1000;
        this.plate = result.vehicle_plate;
        this.img = result.vehicle_img;
    }
}

export default VehicleEntity;