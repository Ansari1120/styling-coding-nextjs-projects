import QuarterDataLayout from "@/app/components/QuarterDataLayout";
import Link from "next/link";
import React from "react";

export default function page() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <QuarterDataLayout
        centerHeading="Quarter IV
"
        courseTitle="AC-351: Ambient Computing with Voice Assistants and Matter Devices
"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending
computing power into our everyday lives in a way that is embedded into our surroundings -
invisible but useful. In a multi-device world, people don't want to spend their life fussing with
technology. An ambient approach gets the tech out of your way so you can live your life while
getting the help you need. It doesn't matter what device you're using, what context you're in,
whether you're talking, typing, or tapping. The technology in your life works together seamlessly.
Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial
intelligence, sensors, connectivity, cloud computing and more.
If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the
two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to
optimize their functionality, like smart sensors and smart speakers: ambient computing builds on
that. Ambient computing focuses on the interaction between these devices once they are connected.
Matter, the next-generation smart home standard, solves many smart home pain points while
bringing all our IoT devices together. Some of the biggest tech companies are working together to
make Matter a unified protocol for future smart homes. These companies include Apple, Amazon,
and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and
Samsung SmartThings will support the Matter standard by default for all new devices.
In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.
"
        outline={common.outline}
        quarterContents="1. Alexa Skill Developement
"
        links={
          <Link href={"https://developer.amazon.com/en-US/alexa"}>Link</Link>
        }
      />
      <div className="-mt-[240px]">
        <QuarterDataLayout
          quarterContents="2. Alexa with Matter Protocol
"
          links={
            <Link href={"https://developer.amazon.com/en-US/alexa/matter"}>
              Link
            </Link>
          }
        />
      </div>
      <div className="md:-mt-[240px] -mt-[-300px]">
        <QuarterDataLayout
          links={
            <Link
              href={
                "https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
              }
            >
              Link
            </Link>
          }
        />
      </div>
    </>
  );
}
