import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { parse } from "url";

export const GET = async (
  req: NextRequest,
  { params }: { params: { p: string } }
) => {
  try {
    const { p } = params;
    const blogsPerPage = 6;
    const skip = (parseInt(p) - 1) * blogsPerPage;
    const take = blogsPerPage;
    const parsedUrl = parse(req.url, true);

    const order = parsedUrl.query.order === "desc" ? "desc" : "asc"; // Default to ascending order if not specified

    const totalRecords = await prisma.post.count();
    const totalPages = Math.ceil(totalRecords / blogsPerPage); //no of pages available according to data length

    if (parseInt(p) < 1 || parseInt(p) > totalPages) {
      return new NextResponse(JSON.stringify({ message: "Page not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const newPost = await prisma.post.findMany({
      take,
      skip,
      orderBy: {
        title: order,
      },
    });

    return new NextResponse(
      JSON.stringify({
        page: parseInt(p),
        totalPages,
        data: newPost,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
