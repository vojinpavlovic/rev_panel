class AccountEntity {
    public bank: number;
    public money: number;
    public blackMoney: number;

    constructor(result: any) {
        this.bank = result.bank ?? 0;
        this.money = result.money ?? 0;
        this.blackMoney = result.black_money ?? 0;
    }
}

export default AccountEntity