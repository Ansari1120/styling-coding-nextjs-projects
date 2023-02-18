import {
  Text,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Grid,
  Center,
  Flex,
} from "@chakra-ui/react";

export default function CoursesCards(props: any) {
  const { data } = props;
  return (
    <>
      <Box
        bgImage="https://png.pngtree.com/background/20210716/original/pngtree-vector-crystal-purple-background-picture-image_1394349.jpg"
        bgSize={"cover"}
        bgAttachment="fixed"
      >
        <Container maxW={1400}>
          <Center>
            <Grid>
              {data.map((x: any, i: any) => {
                return (
                  <Box key={i}>
                    <Box textAlign={"center"} py="30px">
                      <Heading
                        fontWeight={"bold"}
                        marginX={{ lg: "initial", base: "260px" }}
                        pb="30px"
                        color="#11AD8E"
                        size={{ lg: "lg", base: "md" }}
                      >
                        {x.title}
                      </Heading>
                      <Text
                        marginX={{ lg: "initial", base: "250px" }}
                        color="WhiteAlpha.700"
                        fontWeight="semibold"
                      >
                        {x.text}
                      </Text>
                    </Box>
                    <Box flexBasis={"50%"}>
                      <Card
                        bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
                        boxShadow={
                          "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                        }
                        border={"2px solid #11AD8E"}
                        marginX="300px"
                      >
                        <CardHeader>
                          <Heading
                            textAlign={"center"}
                            borderBottom={"7px double teal"}
                            borderBottomWidth="3px"
                            paddingBottom={"8px"}
                            size="xl"
                            borderBottomRadius={"10px"}
                            marginX="60px"
                          >
                            {" "}
                            {x.id}
                          </Heading>
                        </CardHeader>
                        <CardBody>
                          <Badge mb={"15px"} colorScheme="teal">
                            Spacialization
                          </Badge>
                          <Text fontWeight={"semibold"}>{x.description}</Text>
                        </CardBody>
                        <CardFooter>
                          <Button>See Details</Button>
                        </CardFooter>
                      </Card>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Center>
        </Container>
      </Box>
    </>
  );
}
