import prisma from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { content, blogID, commenterName } =
      body;
    const newPost = await prisma.comment.create({
      data: {
        content, blogID, commenterName
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
};
