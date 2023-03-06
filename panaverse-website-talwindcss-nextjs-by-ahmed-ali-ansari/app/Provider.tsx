"use client";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "next-themes";
import React from "react";
// Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #262626;
    --bg: #a3c2c2;
  }

  [data-theme="dark"] {
    --fg: #a3c2c2;
    --bg: #262626;
  }
`;
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
    </>
  );
};

export default Provider;
