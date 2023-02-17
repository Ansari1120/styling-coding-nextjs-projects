import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "./theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
