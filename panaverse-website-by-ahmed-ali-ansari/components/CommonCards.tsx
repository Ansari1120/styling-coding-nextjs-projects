import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
export default function CommonCards({ id, description }: any) {
  return (
    <Box>
      <Container maxW={1400}>
        <SimpleGrid
          templateColumns="repeat(auto-fill,(3,1fr))"
          py="10px"
        >
          <Card
            bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
            boxShadow={
              "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
            }
            border={"2px solid #11AD8E"}
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
                {id}
              </Heading>
            </CardHeader>
            <CardBody>
              <Badge mb={"15px"} colorScheme="teal">
                Description
              </Badge>
              <Text fontWeight={"semibold"}>{description}</Text>
            </CardBody>
            <CardFooter>
              <Button>See Details</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
