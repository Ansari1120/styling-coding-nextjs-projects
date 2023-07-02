import { StaticImageData } from "next/image";

export type product = {
  imageUrl?: StaticImageData | string;
  id: string;
  name: string;
  price: number;
  category: {
    name: string;
  };
  image: StaticImageData;
  type: string;
};
