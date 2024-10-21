import { Injectable } from "@nestjs/common";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";

@Injectable()
export class DeleteProductUseCase {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (id: string): Promise<void> => {
        return await this.repository.delete(id);
    }
}