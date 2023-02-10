"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  ChakraProvider,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

import AddTodos from "../component/todo-list";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <Button size="sm" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Heading
        fontSize="45"
        fontWeight="semibold"
        textAlign="center"
        mt="20px"
        mb="30px"
      >
        Best Todo App
      </Heading>
      <AddTodos />
    </ChakraProvider>
  );
}
