import React from "react";
import Link from "next/link";
import QuarterDataLayout from "@/app/components/QuarterDataLayout";

export default function page() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <QuarterDataLayout
        centerHeading="Quarter V
"
        courseTitle="CN-361: Developing Multi-Cloud Apps using CDK for Terraform
        "
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud
        dependencies. This simplifies management and orchestration for large-scale, multi-cloud
        infrastructures.
        Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages
        to define and provision infrastructure. This gives you access to the entire Terraform ecosystem
        without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of
        your existing toolchain for testing, dependency management, etc.
        "
        outline={common.outline}
        quarterContents="CDK for Terraform
"
        links={
          <Link href={"https://developer.hashicorp.com/terraform/cdktf"}>
            Link
          </Link>
        }
      />
    </>
  );
}
