import Quarterlayout from "@/components/quarterlayout";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
export default function q5() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <Quarterlayout
        centerHeading="Quarter V
"
        courseTitle="NPA-361: Network Programmability and Automation
"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="Traditional network management techniques can't be effectively automated and don't scale well. By
implementing network programmability based on Application Programming Interfaces, this course
will assist in overcoming issues of the future and help you develop the skills required for the
Next-Generation Network Engineer."
        outline={common.outline}
        quarterContents="Textbook:
"
        links={
          <Link
            href={
              "https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
            }
          >
            Link
          </Link>
        }
      />
    </>
  );
}
