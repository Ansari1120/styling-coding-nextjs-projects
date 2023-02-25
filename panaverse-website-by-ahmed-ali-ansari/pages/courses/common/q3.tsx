import Quarterlayout from "@/components/quarterlayout";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function q3() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <Quarterlayout
        centerHeading="Quarter III (Core)
"
        courseTitle="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="Earn While You Learn Projects
"
        outline={common.outline}
        quarterContents="A. Build Full-Stack Next.js 13 Jamstack Templates
        "
        quarterContentText="You will be assigned to build a template which we will sell on Theme Forest and
        Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the
        sale of the template which will be used to manage the platform. An additional 15%
        will be spent on marketing the template. 60% of the revenues will be distributed to
        the developer through the Panaverse DAO in the form of Panaverse tokens."
      />
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="The Template Standard
          "
          links={
            <Link
              href={"https://github.com/panaverse/panaverse-template-standard"}
            >
              See Repo
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="B. Build GraphQL APIs
          "
          quarterContentText="You will be assigned to build APIs for which you will sell subscriptions on the
          Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the
          sale of the template which will be used to manage the platform. An additional 15%
          will be spent on marketing the template. 60% of the revenues will be distributed to
          the developer through the Panaverse DAO in the form of Panaverse tokens.
          "
        />
      </Box>
    </>
  );
}
