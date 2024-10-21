import { ValidationPipe } from "@nestjs/common";

export const ClassValidatorPipe = new ValidationPipe({
    transform: true,
    transformOptions: {
        enableImplicitConversion: true
    }
})