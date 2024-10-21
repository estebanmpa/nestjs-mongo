import { Injectable } from "@nestjs/common";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";
import { BaseIdUseCase } from "src/common/domain/interfaces/base-id-use-case";

@Injectable()
export class FindProductByIdUseCase implements BaseIdUseCase<Product> {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (id: string): Promise<Product> => {
        return await this.repository.findById(id);
    }
}