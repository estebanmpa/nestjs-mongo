import { IdParam } from "src/common/domain/dtos/id-param.dto";
import { PaginatedParam } from "src/common/domain/dtos/paginated-param.dto";
import { PaginatedResultsDTO } from "src/common/domain/dtos/paginated-results.dto";

export abstract class BaseController<T, Create, Update> {
    abstract retrieve(params: PaginatedParam): Promise<PaginatedResultsDTO<T>>;
    abstract retrieveById(id: IdParam): Promise<T>;
    abstract create(product: Create): Promise<void>;
    abstract update(id: IdParam, product: Update): Promise<T>;
    abstract patch(id: IdParam, product: Update): Promise<T>;
    abstract delete(id: IdParam): Promise<void>;
}