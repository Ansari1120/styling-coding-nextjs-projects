"use client";
import React from "react";
import { Box, ChakraProvider, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <ChakraProvider>
        <Box textAlign={"center"} bg=" #6B46C1" pt="88.45px" pb = "198px" color="white">
          <Heading color="white">Simple pricing for your business </Heading>
          <Text pt = "10px">Plans that are carefully crafted to suit your business.</Text>
        </Box>
      </ChakraProvider>
    </div>
  );
}
