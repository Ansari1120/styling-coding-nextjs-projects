import { defineField } from "sanity";

export const SchemaProduct = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    // {
    //   name: "category",
    //   title: "Category",
    //   type: "string",
    // },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        object: true, // <-- Defaults to false
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
