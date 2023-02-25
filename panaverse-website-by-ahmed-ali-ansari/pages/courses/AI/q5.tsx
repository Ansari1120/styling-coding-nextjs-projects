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
        courseTitle="AI-361: Deep Learning and MLOps
"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="This course will help you understand the capabilities, challenges, and consequences of deep
learning and prepare you to participate in the development of leading-edge AI technology. We will
finish the program by learning how to envision, create, and maintain integrated systems that run
constantly in production. Production systems must manage constantly changing data, in stark
contrast to typical machine learning modeling. The production system must also operate
continuously at the lowest possible cost while delivering the highest possible performance."
        outline={common.outline}
        quarterContents="1. Deep Learning with Tensorflow
"
        quarterContentText="Deep Learning with Python, Second Edition 2nd Edition
"
        links={
          <Link
            href={
              "https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
            }
          >
            Link
          </Link>
        }
      />
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Machine Learning Engineering for Production (MLOps) using Terraform for CDK
"
          quarterContentText="A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
"
          links={
            <Link
              href={
                "https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="MLOps leveraging AWS SageMaker and Terraform
"
          links={
            <Link
              href={
                "https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
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
