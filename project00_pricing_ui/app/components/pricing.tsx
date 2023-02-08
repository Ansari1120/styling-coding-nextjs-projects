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
  Text,
} from "@chakra-ui/react";
import checkmarkicon from "../icons/checkmarkicon";
export default function Pricing() {
  return (
    <div>
      <ChakraProvider>
        <Box
          borderRadius={"16px"}
          width="994px"
          m="auto"
          mt={"-150"}
          bg="white"
          height="300"
          overflow={"hidden"}
          boxShadow=" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          {/* main container */}
          <Flex>
            {/* left container */}
            <Box bg="purple.200" p="60px" textAlign="center" height={"336px"}>
              <Text fontSize={"24px"} fontWeight="bold">
                Premium PRO
              </Text>
              <Heading fontSize={"60px"} fontWeight="bold">
                $400
              </Heading>
              <Text mt="8px">billed just once</Text>
              <Button mt="24px" w="300px" color="white" bg="#805AD5">
                Get Started
              </Button>
            </Box>
            {/* right container */}
            <Box bg="white" pt="50px" pl="25px">
              <Text mb="10px">
                Access these features when you get this pricing package for your
                business.
              </Text>
              <HStack>
                <Icon as={checkmarkicon}></Icon>
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack>
                <Icon as={checkmarkicon}></Icon>
                <Text>Additional phone numbers</Text>
              </HStack>
              <HStack>
                <Icon as={checkmarkicon}></Icon>
                <Text>Automated messages via Zapier</Text>
              </HStack>
              <HStack>
                <Icon as={checkmarkicon}></Icon>
                <Text>24/7 support and consulting</Text>
              </HStack>
            </Box>
          </Flex>
          {/* end container */}
        </Box>
      </ChakraProvider>
    </div>
  );
}
