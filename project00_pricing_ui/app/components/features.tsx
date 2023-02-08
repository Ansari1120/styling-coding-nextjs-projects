"use client";
import React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import staricon from "../icons/staricon";
import iconetwo from "../icons/iconetwo";
import iconethree from "../icons/iconethree";
export default function Features() {
  return (
    <Box maxW={"800px"} margin={"auto"} mt="20px" px={"50px"}>
      <Flex
        justifyContent={"center"}
        gap="5"
        direction={{ base: "column", lg: "row" }}
      >
        <HStack mb="20px">
          <Icon as={staricon}></Icon>
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mb="20px">
          <Icon as={iconetwo}></Icon>
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb="20px">
          <Icon as={iconethree}></Icon>
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
