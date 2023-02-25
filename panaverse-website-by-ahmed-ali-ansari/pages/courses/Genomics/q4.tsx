import Quarterlayout from "@/components/quarterlayout";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
export default function q4() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <Quarterlayout
        centerHeading="Quarter IV
"
        courseTitle="Bio-351: Python for Biologists
        "
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="This course will focus on learning the basics of the Python programming language through
        genomics examples.
        "
        outline={common.outline}
        quarterContents="Textbook: "
        links={<Link href={"https://www.pythonforbiologists.org/"}>Link</Link>}
      />
    </>
  );
}
