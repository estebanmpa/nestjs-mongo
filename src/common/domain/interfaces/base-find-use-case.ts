import { FindOptions } from "../types/find-options.type";


export abstract class BaseFindUseCase<T> {
    abstract handle(options: FindOptions): Promise<T[]>;
}