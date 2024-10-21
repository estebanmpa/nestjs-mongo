import { IsNotEmpty, IsUUID } from "class-validator";

/**
 * Class to validate id param in findById endpoints
 */
export class IdParam {
    @IsUUID("4")
    @IsNotEmpty()
    id: string;
}