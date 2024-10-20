import { Controller, Get, Patch, Post, Put } from "@nestjs/common";
import { Product } from "../persistence/mongo/schemas/product.schema";

@Controller()
export class ProductController {
    constructor() { }

    @Get()
    async retrieve(): Promise<Product[]> {
        return []
    }

    @Get(":id")
    async retrieveById(): Promise<Product> {
        return
    }

    @Put(":id")
    async update(): Promise<Product> {
        return
    }

    @Patch(":id")
    async patch(): Promise<Product> {
        return
    }

    @Post()
    async create(): Promise<Product> {
        return
    }
}
