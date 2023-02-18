import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";

export default function CommonCoursesCards(CourseProps: any) {
  return (
    <Box>
      <Container maxW={1400}>
        <Grid>
          <Box textAlign={"center"} py="30px">
            <Heading fontWeight={"bold"} pb="30px" color="#11AD8E" size="lg">
              {CourseProps.title}
            </Heading>
            <Text color="WhiteAlpha.700" fontWeight="semibold">
              {CourseProps.text}
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
