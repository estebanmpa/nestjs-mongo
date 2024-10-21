import { Injectable } from "@nestjs/common";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";

@Injectable()
export class FindProductByIdUseCase {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (id: string): Promise<Product> => {
        return await this.repository.findById(id);
    }
}