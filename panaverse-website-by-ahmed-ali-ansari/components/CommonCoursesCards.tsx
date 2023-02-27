import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

export default function CommonCoursesCards(CourseProps: any) {
  return (
    <Box>
      <Container maxW={1400}>
        <Grid>
          <Box textAlign={"center"} py="30px">
            <RevealWrapper
              origin="left"
              delay={100}
              duration={1000}
              distance="200px"
              reset={true}
              desktop={true}
              mobile={true}
            >
              <Heading fontWeight={"bold"} pb="30px" color="#11AD8E" size="lg">
                {CourseProps.title}
              </Heading>
            </RevealWrapper>
            <RevealWrapper
              origin="right"
              delay={100}
              duration={1000}
              distance="200px"
              reset={true}
              desktop={true}
              mobile={true}
            >
              <Text color="WhiteAlpha.700" fontWeight="semibold">
                {CourseProps.text}
              </Text>
            </RevealWrapper>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
