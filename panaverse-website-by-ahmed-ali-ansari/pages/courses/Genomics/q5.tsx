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
        courseTitle="Bio-361: Bioinformatics with Python

        "
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="In this course we will discover modern, next-generation sequencing libraries from the powerful
Python ecosystem to perform cutting-edge research and analyze large amounts of biological data. "
        outline={common.outline}
        quarterContents="Textbook:
"
        links={
          <Link
            href={
              "https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1"
            }
          >
            Link
          </Link>
        }
      />
    </>
  );
}
