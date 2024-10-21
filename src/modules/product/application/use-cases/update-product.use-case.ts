import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { UpdateProductDto } from "../../domain/dtos/update-product.dto";
import { Injectable } from "@nestjs/common";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";
import { BaseIdDtoUseCase } from "src/common/domain/interfaces/base-id-dto-use-case";

@Injectable()
export class UpdateProductUseCase implements BaseIdDtoUseCase<Product, UpdateProductDto> {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (id: string, dto: UpdateProductDto): Promise<Product> => {
        return await this.repository.update(id, dto);
    }
}