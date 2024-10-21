import { Module } from "@nestjs/common";
import { ProductController } from "./infrastructure/controllers/product.controller";
import { CreateProductUseCase, DeleteProductUseCase, FindProductByIdUseCase, FindProductUseCase, UpdateProductUseCase } from "./application/use-cases";
import { ProductRepositoryImpl } from "./application/repositories/product.repository.impl";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./infrastructure/persistence/mongo/schemas/product.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
    ],
    controllers: [ProductController],
    providers: [
        CreateProductUseCase,
        UpdateProductUseCase,
        FindProductUseCase,
        FindProductByIdUseCase,
        DeleteProductUseCase,
        ProductRepositoryImpl
    ]
})
export class ProductModule { }