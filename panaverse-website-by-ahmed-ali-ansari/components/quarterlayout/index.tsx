import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Quarterlayout({
  centerHeading,
  courseTitle,
  Duration,
  descriptionlabel,
  quarterDescription,
  quarterContents,
  quarterContentText,
  outline,
  links,
}: any) {
  return (
    <Box pt="130px">
      <Container maxW={1400}>
        <Box>
          <Heading textAlign={"center"} size="md" pb="20px">
            {centerHeading}
          </Heading>
        </Box>
        <Flex
          gap={{ lg: "365px", base: "50px" }}
          direction={{ lg: "initial", base: "column" }}
        >
          <Box>
            <Heading size={"lg"}>{courseTitle}</Heading>
          </Box>
          <Box>
            <Text color={"teal"} fontWeight={"semibold"} pt="10px">
              {Duration}
            </Text>
          </Box>
        </Flex>
        <Box>
          <Heading pt="30px" pb="14px" textDecoration={"underline"} size="md">
            {descriptionlabel}
          </Heading>
        </Box>
        <Box>
          <Text fontWeight={"semibold"}>{quarterDescription}</Text>
        </Box>
        <Box>
          <Heading pt="30px" pb="14px" textDecoration={"underline"} size="md">
            {outline}
          </Heading>
        </Box>
        {/* {main box of content data} */}
        <Box paddingLeft={"50px"}>
          <Box>
            <Heading size={"md"} pb="17px">
              {quarterContents}
            </Heading>
          </Box>
          <Flex
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius={"16px"}
            paddingLeft="14px"
            paddingRight={"10px"}
            paddingBottom={{ base: "10px", lg: "initial" }}
            paddingTop={{ base: "10px", lg: "initial" }}
            marginBottom="10px"
          >
            <Box>
              <Text fontWeight={"semibold"}>{quarterContentText}</Text>
            </Box>
            <Box marginLeft={"20px"}>
              <Text
                fontWeight={"semibold"}
                color={"blue"}
                textDecoration="underline"
              >
                {links}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
