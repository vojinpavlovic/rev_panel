class UserEntity {
    public firstname: string | undefined;
    public lastname: string | undefined;
    public sex: string | undefined;
    public health: number | 200;
    public pancir: number | 0;
    public group: string | "user";

    constructor(result: any)
    {
        this.firstname = result.firstname ?? undefined;
        this.lastname = result.lastname ?? undefined;
        this.sex = result.sex ?? undefined;
        this.health = result.health ?? 200;
        this.pancir = result.pancir ?? 0;
        this.group = result.group ?? "user";
    }
}

export default UserEntity;