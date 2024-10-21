export abstract class BaseIdUseCase<T> {
    abstract handle(id: string): Promise<T>;
}