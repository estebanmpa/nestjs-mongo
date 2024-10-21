export abstract class BaseIdDtoUseCase<T, DTO> {
    abstract handle(id: string, dto: DTO): Promise<T>;
}