import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../public/Logo.png";
export default function Footer() {
  return (
    <Box>
      <Container maxW={1400}>
        <SimpleGrid>
          <Box>
            <Heading>About Us</Heading>
            <Image src={Logo} alt={"panaverse Logo"}></Image>
            <Text>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
