import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomUUID } from "crypto";

@Schema()
export class Product {
    @Prop({ type: String, default: () => randomUUID() })
    _id: string;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    description: string;

    @Prop({ type: [String] })
    tags: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
