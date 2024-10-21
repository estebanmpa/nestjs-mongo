import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { Product } from "../persistence/mongo/schemas/product.schema";
import { CreateProductDto } from "../../domain/dtos/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/update-product.dto";
import { BaseController } from "src/common/infrastructure/interfaces/base-controller";
import { CreateProductUseCase, DeleteProductUseCase, FindProductUseCase, UpdateProductUseCase } from "../../application/use-cases";
import { IdParam } from "src/common/domain/dtos/id-param.dto";
import { PaginatedParam } from "src/common/domain/dtos/paginated-param.dto";
import { FindProductByIdUseCase } from "../../application/use-cases/find-product-by-id.use-case";
import { PaginatedResultsDTO } from "src/common/domain/dtos/paginated-results.dto";
import { FindOptions } from "src/common/domain/types/find-options.type";

@Controller("product")
export class ProductController implements BaseController<Product, CreateProductDto, UpdateProductDto> {
    constructor(private readonly createProduct: CreateProductUseCase,
        private readonly updateProduct: UpdateProductUseCase,
        private readonly findProduct: FindProductUseCase,
        private readonly deleteProduct: DeleteProductUseCase,
        private readonly findProductById: FindProductByIdUseCase) { }

    @Get()
    async retrieve(@Query() { page, pageSize }: PaginatedParam): Promise<PaginatedResultsDTO<Product>> {
        const options: FindOptions = { page, pageSize };
        const results = new PaginatedResultsDTO<Product>(page, pageSize, await this.findProduct.handle(options));
        return results;
    }

    @Get(":id")
    async retrieveById(@Param() { id }: IdParam): Promise<Product> {
        return this.findProductById.handle(id);
    }

    @Put(":id")
    async update(@Param() { id }: IdParam, @Body() product: UpdateProductDto): Promise<Product> {
        console.log(id)
        return await this.updateProduct.handle(id, product);
    }

    @Patch(":id")
    async patch(@Param() { id }: IdParam, @Body() product: UpdateProductDto): Promise<Product> {
        return await this.updateProduct.handle(id, product);
    }

    @Post()
    async create(@Body() product: CreateProductDto): Promise<Product> {
        return await this.createProduct.handle(product);
    }

    @Delete(":id")
    async delete(@Param() { id }: IdParam): Promise<void> {
        return this.deleteProduct.handle(id);
    }
}
