import { Injectable } from "@nestjs/common";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";
import { BaseFindUseCase } from "src/common/domain/interfaces/base-find-use-case";
import { FindOptions } from "src/common/domain/types/find-options.type";

@Injectable()
export class FindProductUseCase implements BaseFindUseCase<Product> {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (options: FindOptions): Promise<Product[]> => {
        const { page, pageSize } = options;
        return await this.repository.find(page, pageSize);
    }
}