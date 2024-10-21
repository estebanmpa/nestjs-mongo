import { IsNotEmpty, IsNumber, IsPositive, IsUUID } from "class-validator";

/**
 * Class to validate pagination params. Default values are because they're not mandatory.
 */
export class PaginatedParam {
    @IsNumber()
    @IsPositive()
    page: number = 1;

    @IsNumber()
    @IsPositive()
    pageSize: number = 2;
}