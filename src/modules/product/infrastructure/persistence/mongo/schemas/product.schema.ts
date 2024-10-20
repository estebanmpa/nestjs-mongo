import { Prop, Schema } from "@nestjs/mongoose";
import { randomUUID } from "crypto";

@Schema()
export class Product {
    @Prop({ type: String, default: () => randomUUID() })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop([String])
    tags: string[];
}