import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-07-01",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: true,
});
