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
        courseTitle="CN-351: Certified Kubernetes Application Developer (CKAD)
        "
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="Cloud-native architecture and technologies are an approach to designing, constructing, and
        operating workloads that are built in the cloud and take full advantage of the cloud computing
        model. Cloud-native technologies empower organizations to build and run scalable applications in
        modern, dynamic environments such as public, private, and hybrid clouds. Containers, service
        meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
        These techniques enable loosely coupled systems that are resilient, manageable, and observable.
        Combined with robust automation, they allow engineers to make high-impact changes frequently
        and predictably with minimal toil.
        Kubernetes is an open-source system for automating the deployment, scaling, and management of
        containerized applications. In this course, you will learn how to develop cloud applications using
        cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.
        "
        outline={common.outline}
        quarterContents="1. Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition

"
        links={
          <Link
            href={
              "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
            }
          >
            Link
          </Link>
        }
      />
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Cloud Development Kit for Kubernetes
          "
          links={<Link href={"https://cdk8s.io/"}>Link</Link>}
        />
      </Box>
    </>
  );
}
