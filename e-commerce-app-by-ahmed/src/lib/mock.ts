import { product } from "./types";

import p1 from "../../public/p1.png";
import p2 from "../../public/header.webp";
import p3 from "../../public/p3.png";
import p5 from "../../public/p5.png";
import p6 from "../../public/p6.png";
import p7 from "../../public/p7.png";
import p8 from "../../public/p8.png";
import m1 from "../../public/m1.png";
import m2 from "../../public/m2.png";

export const Products: product[] = [
  {
    id: "1",
    name: "Brushed Raglen Sweatshirt",
    price: 195,
    category: "female",
    image: p1,
    type: "shirt",
  },
  {
    id: "2",
    name: "Camryn Sash Tie Dress",
    price: 545,
    category: "female",
    image: p2,
    type: "dress",
  },
  {
    id: "3",
    name: "Flex Sweatshirt",
    price: 175,
    category: "female",
    image: p3,
    type: "sweater",
  },
  {
    id: "4",
    name: "Flex Sweatpants",
    price: 185,
    category: "female",
    image: p5,
    type: "pants",
  },
  {
    id: "5",
    name: "Flex Sweatpants",
    price: 150,
    category: "female",
    image: p6,
    type: "pants",
  },
  {
    id: "6",
    name: "Brushed Bomber",
    price: 225,
    category: "female",
    image: p7,
    type: "jackets",
  },
  {
    id: "7",
    name: "Musical Tank",
    price: 75,
    category: "female",
    image: p8,
    type: "shirt",
  },
  {
    id: "8",
    name: "Flex Push Button Bomber",
    price: 225,
    category: "male",
    image: m1,
    type: "sweater",
  },
  {
    id: "9",
    name: "Raglen Sweatshirt",
    price: 195,
    category: "male",
    image: m2,
    type: "jackets",
  },
];
