export default interface IServerRepository {
    getDynamic(): Promise<any>;
}