import { StaticImageData } from "next/image";

export type product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  type: string;
};
