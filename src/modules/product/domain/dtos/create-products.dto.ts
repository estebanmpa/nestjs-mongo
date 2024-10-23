import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { CreateProductDto } from "./create-product.dto";
import { Type } from "class-transformer";

export class CreateProductsDto {
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateProductDto)
    products: CreateProductDto[];
}