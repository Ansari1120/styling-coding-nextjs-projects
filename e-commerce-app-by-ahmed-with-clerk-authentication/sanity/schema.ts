import { type SchemaTypeDefinition } from "sanity";
import { SchemaProduct } from "./product";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [SchemaProduct,category],
};
