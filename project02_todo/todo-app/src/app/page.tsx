"use client";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import AddTodos from "../component/todo-list";

export default function Home() {
  return (
    <ChakraProvider>
      <Heading fontSize="45" fontWeight="semibold" textAlign="center" mt="20px" mb="30px">
        Best Todo App
      </Heading>
      <AddTodos />
    </ChakraProvider>
  );
}
