import prisma from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const Post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!Post) {
      return NextResponse.json(
        { message: "Post Not Found !" },
        { status: 404 }
      );
    }
    return NextResponse.json(Post);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    const { title, description, imageSrc } = body;
    const { id } = params;
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        imageSrc,
      },
    });

    if (!updatePost) {
      return NextResponse.json(
        { message: "Post Not Found !" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const DeletePost = await prisma.post.delete({
      where: {
        id,
      },
    });
    if (!DeletePost) {
      return NextResponse.json(
        { message: "Post Not Found to delete !" },
        { status: 404 }
      );
    }
    return NextResponse.json(DeletePost);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
};
