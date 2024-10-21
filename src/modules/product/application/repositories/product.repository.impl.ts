import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../../domain/dtos/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/update-product.dto";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
    constructor(@InjectModel(Product.name) private readonly productSchema: Model<Product>) { }

    find = async (page: number, pageSize: number): Promise<Product[]> => {
        const products = await this.productSchema.aggregate([
            {
                $facet: {
                    metadata: [{ $count: 'totalCount' }],
                    data: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
                },
            },
        ]);

        return products[0].data;
    }

    findById = async (id: string): Promise<Product> => {
        return await this.productSchema.findById(id).exec();
    }

    create = async (dto: CreateProductDto): Promise<Product> => {
        const newProduct = new this.productSchema(dto);
        return await newProduct.save();
    }

    update = async (id: string, dto: UpdateProductDto): Promise<Product> => {
        return await this.productSchema.findByIdAndUpdate(id, dto, { new: true });
    }

    delete = async (id: string): Promise<void> => {
        return await this.productSchema.findByIdAndDelete(id);
    }
}