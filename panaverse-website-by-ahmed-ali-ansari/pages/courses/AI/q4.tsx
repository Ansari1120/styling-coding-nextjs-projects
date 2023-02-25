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
        courseTitle="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="Artificial intelligence is the simulation of human intelligence processes by machines, especially
computer systems. The AI and Deep Learning Specialization is a foundational program that will aid
in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to
take part in the creation of cutting-edge AI technology.
        We will start this course by understanding the fundamentals and use cases for AI and move on to
building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.
We'll conclude the course by learning about basic programming concepts using Python, such as
lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with
exercises for each topic. We'll also learn how to make your programs interactive and how to test
your code safely before adding it to a project. It is a fast-paced, thorough introduction to
programming with Python 3.10+ that will have you writing programs, solving problems, and
making things that work in no time. In this quarter we will also learn Git, the distributed version
control system. We will also review Git-based GitHub services."
        outline={common.outline}
        quarterContents="1. Introduction to Machine Learning, Data Science, and AI
"
        quarterContentText="AI for Everyone
"
        links={
          <Link href={"https://www.coursera.org/learn/ai-for-everyone"}>
            Link
          </Link>
        }
      />
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="AI for Everyone Quiz in Week 3
          Total Questions: 60, Total Time: 75 minutes
          "
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
          We will cover GPT-4, ChatGPT, etc. and Next.js 13"
          links={<Link href={"https://openai.com/api/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          links={
            <Link
              href={
                "https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="3. Python Crash Course for TypeScript Developers
          "
          quarterContentText="Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to
          Programming 2nd Edition"
          links={
            <Link
              href={
                "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
    </>
  );
}
