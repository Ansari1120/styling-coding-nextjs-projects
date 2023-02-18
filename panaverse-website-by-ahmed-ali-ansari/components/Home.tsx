import { Container, Heading, Box } from "@chakra-ui/react";

export default function Home(hello: any) {
  return (
    <Box
      bgImage={hello.src}
      py="200px"
      bgSize={"cover"}
      bgAttachment="fixed"
      fontStyle={"italic"}
      borderBottomRadius="150px"
    >
      <Container maxW={1400}>
        <Heading color={"black"} size="2xl">
          {hello.title}
        </Heading>
      </Container>
    </Box>
  );
}
