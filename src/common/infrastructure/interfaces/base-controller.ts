import { IdParam } from "src/common/domain/dtos/id-param.dto";

export abstract class BaseController<T, Create, Update> {
    abstract retrieve(): Promise<T[]>;
    abstract retrieveById(id: IdParam): Promise<T>;
    abstract create(product: Create): Promise<T>;
    abstract update(id: IdParam, product: Update): Promise<T>;
    abstract patch(id: IdParam, product: Update): Promise<T>;
    abstract delete(id: IdParam): Promise<void>;
}