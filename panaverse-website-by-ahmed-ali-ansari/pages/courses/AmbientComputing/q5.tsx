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
        courseTitle="AC-361: Embedded Programming using C and Rust
"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="This is an introductory course about using the C and Rust Programming Languages on 'Bare Metal'
embedded systems, such as Microcontrollers. We will start by introducing embedded systems and
move on to learn the C++ and Rust programming languages. We'll learn about basic programming
concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and
embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust
that will have you writing programs, solving problems, burning your code on microcontrollers,
playing with GPIOs, and making things that work in no time."
        outline={common.outline}
        quarterContents="1. Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)
"
        quarterContentText="What is the Fourth Industrial Revolution?
What is IoT?
Embedded Systems
Hardware and Software for IoT
Edge and Cloud Computing
The future of IoT is AI
Blockchain in the Internet of Things?
IoT + AI + Blockchain: The Fourth Industrial Revolution has begun
How will Matter change the IoT Infrastructure and address issues
Metaverse and IoT
Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3
Total Questions: 46, Total Time: 60 minutes"
        links={
          <Link
            href={
              "https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing"
            }
          >
            Link
          </Link>
        }
      />
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="The C Reference Book: The C programming language
Embedded Programming book: Internet of things with ESP8266 
"
          quarterContentText="Download Link:"
          links={
            <Link
              href={
                "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="3. Introduction to C Part 1 (Weeks 3B, 4, and 5)
"
          quarterContentText="C environment Setup for (Windows, Linux, and Mac OS systems)
Chapters 1-2 of “The C programming language”
● Variable names types
● Data types and sizes
● Constants
● Arithmetic operations
● Logical and relational operators
● Type conversions.
● Bitwise operators
● Conditional expressions.
Programming Assignments will also be given."
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="4. C Programming Part 2 (Weeks 6 and 7)
"
          quarterContentText="Topics 3 and 4 of “The C programming language”
● Control flow statements (else if, loops, switch, break continue)
● Function and Program structure(Returning and non-returning, scope rules,
Recursion)
Programming Assignments will also be given"
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="5. Introduction to Embedded systems Part 1 (Weeks 8)
"
          quarterContentText="Basic Electronics and Introduction to microcontrollers
Chapter 1 of “Internet of things with ESP8266”
● Arduino IDE installation and env setup for ESP8266
● Burning your first code on ESP8266
Project-based Assignments will also be given.
Mid-Term II: C Programming Quiz 1 in Week 9
Total Questions: 62, Total Time: 75 minutes
"
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="6. Introduction to Embedded systems Part 2 (Weeks 9-12)
"
          quarterContentText="Chapters 2-5 of “Internet of things with ESP8266”
"
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Connecting your hardware to wifi.
"
          links={
            <Link
              href={
                "https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Reading data from GPIOs.
"
          links={
            <Link
              href={
                "https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Controlling LEDs.
● Reading data from digital sensors."
          links={
            <Link
              href={
                "https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Cloud data logging.
"
          links={
            <Link
              href={
                "https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          links={
            <Link
              href={
                "https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          links={
            <Link
              href={
                "https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
              }
            >
              {" "}
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Displaying data on the cloud.
          "
          links={
            <Link
              href={
                "https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Controlling controller remotely.
          "
          links={
            <Link
              href={
                "https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="● Controlling controller remotely.
          "
          links={
            <Link
              href={
                "● Controlling a lamp anywhere in the world. ● Interacting with different web services."
              }
            >
              {" "}
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="4. Embedded Programming using Rust (Extra Weeks in the Course)
          "
          links={
            <Link
              href={
                "4. Embedded Programming using Rust (Extra Weeks in the Course)"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          links={
            <Link href={"https://www.rust-lang.org/what/embedded"}>Link</Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="5. Hardware Requirements:
          "
          quarterContentText="a. Esp8266 (Node MCU)
          b. Jumper Wires
          c. Bread Board
          d. LEDs
          e. Sensors: (Dht11, ultrasonic sensor, IR sensor)"
        />
      </Box>
    </>
  );
}
