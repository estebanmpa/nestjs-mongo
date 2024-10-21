export abstract class BaseRepository<T, CreateDto, UpdateDto> {
    abstract find(page: number, pageSize: number): Promise<T[]>;
    abstract findById(id: string): Promise<T>;
    abstract create(dto: CreateDto): Promise<T>;
    abstract update(id: string, dto: UpdateDto): Promise<T>;
    abstract delete(id: string): Promise<void>;
}