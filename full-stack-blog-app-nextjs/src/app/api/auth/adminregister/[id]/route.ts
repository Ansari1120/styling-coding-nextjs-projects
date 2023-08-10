import prisma from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    const { name, email, image, hashedPassword } = body;
    const { id } = params;
    const updatePost = await prisma.admin.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        image,
        hashedPassword,
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
