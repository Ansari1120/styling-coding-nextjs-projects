import { defineType } from "sanity";

//typeguard added

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
    },
  ],
});
