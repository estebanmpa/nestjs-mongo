import { Injectable } from "@nestjs/common";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";
import { BaseIdUseCase } from "src/common/domain/interfaces/base-id-use-case";

@Injectable()
export class DeleteProductUseCase implements BaseIdUseCase<void> {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (id: string): Promise<void> => {
        return await this.repository.delete(id);
    }
}