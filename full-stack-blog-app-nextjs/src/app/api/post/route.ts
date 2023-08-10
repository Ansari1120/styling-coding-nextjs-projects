import prisma from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { title, description, imageSrc, authorImg, authorName, blogLikes } =
      body;
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        imageSrc,
        authorImg,
        authorName,
        blogLikes,
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

export const GET = async () => {
  try {
    const newPost = await prisma.post.findMany();

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
};
