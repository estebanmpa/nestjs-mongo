import { Module } from "@nestjs/common";
import { ProductController } from "./infrastructure/controllers/product.controller";

@Module({
    controllers: [ProductController]
})
export class ProductModule { }