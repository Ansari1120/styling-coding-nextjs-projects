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
} from "@chakra-ui/react";
import { RevealList, RevealWrapper } from "next-reveal";
import Link from "next/link";

export default function CoursesCards(props: any) {
  const { data } = props;
  return (
    <>
      <Box
        bgImage="https://png.pngtree.com/background/20210716/original/pngtree-vector-crystal-purple-background-picture-image_1394349.jpg"
        bgSize={"cover"}
        bgAttachment="fixed"
        marginX="-4"
      >
        <Container maxW={1400}>
          <Center>
            <Grid>
              {data.map((x: any, i: any) => {
                return (
                  <Box key={i} py="10px">
                    <Box textAlign={"center"} py="30px">
                      <RevealWrapper
                        origin="left"
                        delay={200}
                        duration={1000}
                        distance="500px"
                        reset={true}
                        desktop={true}
                        mobile={true}
                      >
                        <Heading
                          fontWeight={"bold"}
                          marginX={{ lg: "initial", base: "378px" }}
                          pb="30px"
                          color="#11AD8E"
                          size={{ lg: "lg", base: "md" }}
                        >
                          {x.title}
                        </Heading>
                      </RevealWrapper>
                      <RevealWrapper
                        origin="right"
                        delay={200}
                        duration={1000}
                        distance="500px"
                        reset={true}
                        desktop={true}
                        mobile={true}
                      >
                        <Text
                          marginX={{ lg: "initial", base: "380px" }}
                          color="WhiteAlpha.700"
                          fontWeight="semibold"
                        >
                          {x.text}
                        </Text>
                      </RevealWrapper>
                    </Box>
                    <Box flexBasis={"50%"}>
                      <RevealWrapper
                        origin="right"
                        delay={200}
                        duration={1000}
                        distance="500px"
                        reset={true}
                        desktop={true}
                        mobile={true}
                      >
                        <Card
                          bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
                          boxShadow={
                            "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                          }
                          border={"2px solid #11AD8E"}
                          marginX="400px"
                        >
                          <RevealList
                            delay={500}
                            interval={160}
                            origin="bottom"
                            duration={1500}
                            distance="500px"
                            reset={true}
                            desktop={true}
                            mobile={true}
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
                              <Text fontWeight={"semibold"}>
                                {x.description}
                              </Text>
                            </CardBody>
                            <CardFooter>
                              <Link href={`/courses${x.link}`}>
                                <Button>See Details</Button>
                              </Link>
                            </CardFooter>
                          </RevealList>
                        </Card>
                      </RevealWrapper>
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
