import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../../domain/dtos/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/update-product.dto";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ConfigService } from "@nestjs/config";
import { ConfigurationEnum } from "src/common/configuration/configuration.enum";

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
    constructor(@InjectModel(Product.name) private readonly productSchema: Model<Product>,
        private readonly configService: ConfigService) { }

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

    create = async (dto: CreateProductDto[]): Promise<void> => {
        const batchSize: number = this.configService.get<number>(ConfigurationEnum.DATABASE_BATCH_SIZE);
        const batchLoops: number = Math.ceil(dto.length / batchSize);

        for (let step = 0; step < batchLoops; step++) {
            const batchInserts: CreateProductDto[] = dto.slice(step * batchSize, (step * batchSize) + batchSize);

            // Keeping not awaited to avoid blocking thread
            this.productSchema.insertMany(batchInserts).catch(error => { 
                // TODO: Log error using sentry for example
            });
        }
    }

    update = async (id: string, dto: UpdateProductDto): Promise<Product> => {
        return await this.productSchema.findByIdAndUpdate(id, dto, { new: true });
    }

    delete = async (id: string): Promise<void> => {
        return await this.productSchema.findByIdAndDelete(id);
    }
}