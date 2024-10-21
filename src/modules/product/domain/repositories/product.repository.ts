import { BaseRepository } from "src/common/domain/interfaces/base-repository";
import { Product } from "../../infrastructure/persistence/mongo/schemas/product.schema";
import { CreateProductDto } from "../dtos/create-product.dto";
import { UpdateProductDto } from "../dtos/update-product.dto";

export abstract class ProductRepository extends BaseRepository<Product, CreateProductDto, UpdateProductDto> { }