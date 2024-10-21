import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { UpdateProductDto } from "../../domain/dtos/update-product.dto";
import { Injectable } from "@nestjs/common";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";

@Injectable()
export class UpdateProductUseCase {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (id: string, dto: UpdateProductDto): Promise<Product> => {
        return await this.repository.update(id, dto);
    }
}