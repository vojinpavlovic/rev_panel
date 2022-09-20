export interface IMysqlService {
    setup(): void;
    execute<T>(query: string, params: string[]): Promise<T>;
}