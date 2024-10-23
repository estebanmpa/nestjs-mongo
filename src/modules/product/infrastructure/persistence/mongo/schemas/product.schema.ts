import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomUUID } from "crypto";

@Schema({ autoIndex: true })
export class Product {
    @Prop({ type: String, default: () => randomUUID() })
    _id: string;

    @Prop({ type: String, required: true, index: true })
    name: string;

    @Prop({ type: String, required: true })
    description: string;

    @Prop({ type: [String], index: true })
    tags: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
