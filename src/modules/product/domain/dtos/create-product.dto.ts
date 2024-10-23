import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsArray()
    @IsString({ each: true })
    tags: string[];
}