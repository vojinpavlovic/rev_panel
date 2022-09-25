class VehicleEntity {
    public plate: string;
    public vehicle: string;
    public model: string;
    public job: string | null | undefined;
    public img: string | null | undefined;

    constructor(result: any)
    {
        this.plate = result.vehicle_plate;
        this.vehicle = JSON.parse(result.vehicle_specs ? result.vehicle_specs : "{}");
        this.model = result.vehicle_model;
        this.job = result.vehicle_job;
        this.img = result.vehicle_img;
    }
}

export default VehicleEntity;