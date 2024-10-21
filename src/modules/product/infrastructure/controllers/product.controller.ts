import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { Product } from "../persistence/mongo/schemas/product.schema";
import { CreateProductDto } from "../../domain/dtos/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/update-product.dto";
import { BaseController } from "src/common/infrastructure/interfaces/base-controller";
import { CreateProductUseCase, FindProductUseCase, UpdateProductUseCase } from "../../application/use-cases";
import { IdParam } from "src/common/domain/dtos/id-param.dto";

@Controller("product")
export class ProductController implements BaseController<Product, CreateProductDto, UpdateProductDto> {
    constructor(private readonly createProduct: CreateProductUseCase,
        private readonly updateProduct: UpdateProductUseCase,
        private readonly findProduct: FindProductUseCase) { }

    @Get()
    async retrieve(): Promise<Product[]> {
        return await this.findProduct.handle();
    }

    @Get(":id")
    async retrieveById(@Param() params: IdParam): Promise<Product> {
        const { id } = params;
        console.log(id)
        return 
    }

    @Put(":id")
    async update(@Param() params: IdParam, @Body() product: UpdateProductDto): Promise<Product> {
        const { id } = params;
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
        return
    }
}
