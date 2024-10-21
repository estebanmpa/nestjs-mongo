export abstract class BaseUseCase<T, Dto> {
    abstract handle(dto: Dto): Promise<T>;
}