import { type SchemaTypeDefinition } from "sanity";
import { SchemaProduct } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [SchemaProduct],
};
