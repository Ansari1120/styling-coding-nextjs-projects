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
        courseTitle="NPA-351: CCNA 200-301 Certification
        "
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="This course will focus on learning the basics of the networking and preparing for the new Cisco
        Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions
        and technologies needed to implement and administer a broad range of modern networking and IT
        infrastructure."
        outline={common.outline}
        quarterContents="Textbook:
        "
      
        links={
          <Link
            href={
"https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"            }
          >
            Link
          </Link>
        }
      />
     
    </>
  )
}
