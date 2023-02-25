import Quarterlayout from "@/components/quarterlayout";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function q1() {
  //did extra code  "common" array due to unintended repeatation of components
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };

  return (
    <>
      <Quarterlayout
        centerHeading="Quarter I (Core)"
        courseTitle="CS-101: Object-Oriented Programming using TypeScript"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users."
        outline={common.outline}
        quarterContents="1. HTML & CSS (Homework)"
        quarterContentText="Learn HTML by Hira Khan"
        links={
          <Link
            href={
              "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
            }
          >
            (Watch Recorded Videos)
          </Link>
        }
      />
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText=" Learn CSS Intro by Hira Khan "
          links={
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
              }
            >
              (Watch Recorded Videos)
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Web 3.0 and Metaverse Theory"
          quarterContentText="Introduction to Panaverse DAO"
          links={
            <Link
              href={
                "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit"
              }
            >
              (Download Slide)
            </Link>
          }
        />
      </Box>

      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="Web 3.0 User Guide"
          links={
            <Link
              href={
                "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit"
              }
            >
              (Download Slide)
            </Link>
          }
        />
      </Box>

      <Box mt="-260px">
        <Quarterlayout quarterContentText="Complete Web 3 Assignments included in the Web 3 User Guide" />
      </Box>

      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="Virtual and Augmented Metaverse User Guide"
          links={
            <Link
              href={
                "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit#slide=id.p"
              }
            >
              (Download Slide)
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="3. Fundamentals of JavaScript"
          quarterContentText="Learn JavaScript by Zeeshan Hanif"
          links={
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
              }
            >
              (Watch Recorded Video)
            </Link>
          }
        />
      </Box>

      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages"
          links={
            <Link
              href={
                "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
              }
            >
              (Get Book)
            </Link>
          }
        />
      </Box>

      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="JavaScript Book Code"
          links={
            <Link
              href={
                "https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
              }
            >
              (Visit)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="Getting Started Exercises with JavaScript and Node.js"
          links={
            <Link
              href={
                "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
              }
            >
              (Visit)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout quarterContentText="Fundamentals of JavaScript and Node.js Quiz" />
      </Box>
      <Text paddingLeft={"64px"} fontWeight={"bold"}>
        Topics Covered in the Quiz:
      </Text>
      <Box mt="-260px">
        <Quarterlayout quarterContentText="A. Background of JavaScript and How to use JavaScript in Browser" />
      </Box>
      <Box mt="-260px">
        <Quarterlayout quarterContentText="B. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)" />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="C. Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:"
          links={
            <Link
              href={
                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit"
              }
            >
              (Visit)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="D. How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:"
          links={
            <Link
              href={
                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit#slide=id.p"
              }
            >
              (Link)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText=" Note: After this point, we will do all our class work and
              exercises using Node.js in .mjs files. We will also be able to
              develop interactive Node.js console programs which will greatly
              help the students to learn."
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout quarterContentText="E. Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)" />
      </Box>
      <Box mt="-260px">
        <Quarterlayout quarterContentText="F. Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)" />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="G. Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)

          "
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="H. Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
          "
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="I. Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
          "
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="J. JavaScript promises, mastering the asynchronous"
          links={
            <Link
              href={
                "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-async%20hronous-in-javascript"
              }
            >
              (Link)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="K. New JavaScript Features in ECMAScript 2022 and 2021          "
          links={
            <Link
              href={
                "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
              }
            >
              (Link)
            </Link>
          }
        />
      </Box>

      <Box mt="-210px">
        <Quarterlayout
          quarterContents="4. Object-Oriented Programming with TypeScript
          "
          quarterContentText="Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript

          "
          links={
            <Link
              href={
                "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1%20_1"
              }
            >
              (Watch Recorded Video)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="Learning Repository           "
          links={
            <Link href={"https://github.com/panaverse/learn-typescript"}>
              (Link)
            </Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="In Class Companion projects and articles for Learning TypeScript

          "
          links={
            <Link href={"https://www.learningtypescript.com/  "}>(Link)</Link>
          }
        />
      </Box>
      <Box mt="-260px">
        <Quarterlayout
          quarterContentText="Homework Projects"
          links={
            <Link
              href={"https://github.com/panaverse/typescript-node-projects"}
            >
              (Link)
            </Link>
          }
        />
      </Box>

      <Box mt="-210px">
        <Quarterlayout
          quarterContents="5. TypeScript for React"
          quarterContentText="Minimal TypeScript Crash Course For React With Interactive Code Exercises
          "
          links={
            <Link href={"https://profy.dev/article/react-typescript"}>
              (Watch Recorded Video)
            </Link>
          }
        />
      </Box>
    </>
  );
}
