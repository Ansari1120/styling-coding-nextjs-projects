"use client";
import Header from "./components/header";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Pricing from "./components/pricing";
import Features from "./components/features";
export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  );
}
