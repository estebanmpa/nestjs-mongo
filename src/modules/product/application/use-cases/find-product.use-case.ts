import { Injectable } from "@nestjs/common";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";

@Injectable()
export class FindProductUseCase {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (page: number, pageSize: number): Promise<Product[]> => {
        return await this.repository.find(page, pageSize);
    }
}