import Quarterlayout from "@/components/quarterlayout";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function q2() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <Quarterlayout
        centerHeading="Quarter II (Core)"
        courseTitle="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
        using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="The objective of this course is to teach participants to develop customer-facing planet-scale Websites,
        Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the
        participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies
        covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma,
        Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development
        Kit for Terraform (CDKTF)."
        outline={common.outline}
        quarterContents="1. Next.js 13 Web Development"
        quarterContentText="Next 13 Official Documentation"
        links={
          <Link href={"https://beta.nextjs.org/docs"}>See Official docs</Link>
        }
      />

      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Latest Learn React Official Website
          "
          links={<Link href={"https://beta.reactjs.org/learn"}>See Docs</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Learn Next.js 13 Learning Repo
          "
          links={
            <Link href={"https://github.com/panaverse/learn-nextjs"}>
              Get Repo
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Next.js 13 using Chakra UI (Remote Zoom Class)
          "
          quarterContentText="CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items
          "
          links={
            <Link
              href={
                "https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
              }
            >
              Open guide
            </Link>
          }
        />
      </Box>

      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Chakra UI Docs

          "
          links={
            <Link href={"https://chakra-ui.com/getting-started"}>See Docs</Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)

          "
          quarterContentText="Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design
          principles by creating interactive prototypes for mobile, tablet, and desktop by
          Fabio Staiano
           "
          links={
            <Link
              href={
                "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
              }
            >
              View Book
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Figma Design Kit for TailwindCSS
          "
          links={
            <Link
              href={"https://www.figma.com/community/file/768809027799962739"}
            >
              See Kit
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Chakra UI Figma Kit
          "
          links={
            <Link
              href={"https://www.figma.com/community/file/971408767069651759"}
            >
              See Kit
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="4. API Routes with Next.js (Remote Zoom Class)
          "
          quarterContentText="API Routes
          "
          links={
            <Link href={"https://nextjs.org/docs/api-routes/introduction"}>
              See Docs
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="5. APIs with Next.js and tRPC (Remote Zoom Class)
          "
          quarterContentText="Build a tRPC CRUD API Example with Next.js
          "
          links={
            <Link
              href={
                "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Stop building REST APIs for your Next.js apps, use tRPC instead
          "
          links={
            <Link
              href={
                "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="6. SQL and Prisma
          "
          quarterContentText="Start from scratch with relational databases
          "
          links={
            <Link
              href={
                "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="SQL For Beginners Video Tutorial
          "
          links={
            <Link href={"https://www.youtube.com/watch?v=5hzZtqCNQKk"}>
              See Tutotial
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Database Management Systems and SQL – Tutorial for Beginners
          "
          links={
            <Link
              href={"https://www.freecodecamp.org/news/dbms-and-sql-basics/"}
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="7. Next.js 13 using TailwindCSS (Remote Zoom Class)
          "
          quarterContentText="Modern CSS with Tailwind, Second Edition by Noel Rappin
          "
          links={
            <Link
              href={
                "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="8. AWS Application Composer (Remote Zoom Class)
          "
          quarterContentText="What is AWS Application Composer?
          "
          links={
            <Link href={"https://www.youtube.com/watch?v=BujE_tik5r8"}>
              See Video
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Event-driven apps with AWS Application Composer
          "
          links={
            <Link href={"https://www.youtube.com/watch?v=p411uh363jQ"}>
              See Video
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Visually design and build serverless applications quickly
          "
          links={
            <Link href={"https://aws.amazon.com/application-composer/"}>
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Must Have: Create Free AWS Account
          AWS Free Tier          "
          links={<Link href={"https://aws.amazon.com/free/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Note: For AWS Free Tier you will need a credit or debit card. The easiest way for
          Pakistani students is to open a bank account with Meezan Bank. Open a Meezan
          Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for
          ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card
          will be delivered in a few weeks. Our students have reported that this Debit card
          works with AWS.
          Now you can create a virtual VISA Debit card through the NayaPay app"
          links={<Link href={"https://www.nayapay.com/"}>Get Card</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="which can be used to create AWS/GCP/Azure
          accounts. This is good news for those students who find it difficult to create
          physical debit and credit cards from banks."
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="You can also get a $300 credit
          "
          links={
            <Link
              href={
                "https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"
              }
            >
              Visit
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="9. Multi-Cloud GraphQL Serverless API Development with Cloud Development
          Kit for Terraform (CDKTF) (Remote Zoom Class)"
          quarterContentText="Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps
          "
          links={
            <Link
              href={
                "https://github.com/panaverse/learn-multicloud-api-development"
              }
            >
              (Download Slide)
            </Link>
          }
        />
      </Box>
      <Box   marginRight={"90px"}>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="Web 2.0 Projects
          "
          quarterContentText="1. Next.js Projects
          "
          links={
            <Link href={"https://github.com/panaverse/nextjs-projects"}>
              Get Repo
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="2. Styling Next.js Projects using TailwindCSS and Chakra UI
          "
          links={
            <Link href={"https://github.com/panaverse/styling-nextjs-projects"}>
              Get Repo
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="3. Todo Full-Stack App
          "
          links={
            <Link href={"https://github.com/ogzhanolguncu/min-todo"}>
              Get Repo
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="4. Build a Twitter Clone
          "
          links={
            <Link href={"https://www.youtube.com/watch?v=nzJsYJPCc80"}>
            See Video
            </Link>
          }
        />
      </Box>
      </Box>
    </>
  );
}
