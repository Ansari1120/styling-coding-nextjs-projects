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
        courseTitle="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
        Experiences"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the
        metaverses so that we can travel between them. This is only achievable with open web-based
        metaverses. The internet and its browsers are magical. Federated but linked experiences connect
        pages, people, technology, businesses, standards, and nations. It's unlike anything else. The
        metaverse should replicate the best qualities of the web - it should just be the web. We just have to
        extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual
        Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and
        WebGPU technologies.
        "
        outline={common.outline}
        quarterContents="1. Open Metaverse Web Development
        "
        quarterContentText="Open Metaverse Learning Repo
         "
        links={
          <Link href={"https://github.com/panaverse/metaverse-web"}>
            See Repo
          </Link>
        }
      />
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
          "
          quarterContentText="Blender development is being funded by heavyweights in the real-time 3D (RT3D)
          space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe,
          Microsoft, and Decentraland. It is expected to become the standard asset creation
          tool for metaverse. Blender 3.3+ Download"
          links={<Link href={"https://www.blender.org/download/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Blender 3.0 Beginner Tutorial
          "
          links={
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
              }
            >
              View Tutorial
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Blender 3.0 Hotkey
          "
          links={
            <Link
              href={
                "https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
              }
            >
              See Docs
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Blender Projects Textbook: Blender by Example 2nd Edition
          "
          links={
            <Link
              href={
                "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling
          & Animation 7th Edition by John M. Blain"
          links={
            <Link
              href={
                "https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Best Hardware Performance for Blender Rendering
          "
          links={
            <Link href={"https://www.youtube.com/watch?v=H7T0SzdFHwg"}>
              See Tutorial
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Assignment 1:"
         
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Build a 3D Donut using Blender 3 as shown in these video tutorials
          "
          links={
            <Link
              href={
"https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
              }
            >
             See Tutorial
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Assignment 2:"
         
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by
            Example 2nd Edition"
          links={
            <Link
              href={
"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              }
            >
             Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Assignment 3:
          "
         
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book
          Blender by Example 2nd Edition
          "
          links={
            <Link
              href={
"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              }
            >
             Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Assignment 4:
          "
         
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the
          Book Blender by Example 2nd Edition"
          links={
            <Link
              href={
"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              }
            >
             Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Assignment 5:
          "
         
        />
      </Box>
     
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book
          Blender by Example 2nd Edition"
          links={
            <Link
              href={
"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              }
            >
             Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Assignment 6:
          "
         
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials
          "
          links={
            <Link
              href={
"https://www.youtube.com/watch?v=bpvh-9H8S1g"
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
