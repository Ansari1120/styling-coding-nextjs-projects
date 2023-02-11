"use client";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
