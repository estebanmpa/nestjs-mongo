import { BaseUseCase } from "src/common/domain/interfaces/base-use-case";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { CreateProductDto } from "../../domain/dtos/create-product.dto";
import { Injectable } from "@nestjs/common";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";

@Injectable()
export class CreateProductUseCase implements BaseUseCase<Product, CreateProductDto> {
    constructor(private readonly repository: ProductRepositoryImpl) { }

    handle = async (dto: CreateProductDto[]): Promise<void> => {
        return await this.repository.create(dto);
    }
}