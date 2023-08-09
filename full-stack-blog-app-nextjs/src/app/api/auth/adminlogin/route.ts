// import { connect } from "@/lib/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { loginSchema, registerSchema } from "@/validator/authSchema";
import JSONAPIJSONAPIErrorReporter from "@/validator/errorReport";
import bcrypt from "bcryptjs";
import { User } from "@/model/userModel";
import prisma from "@/lib/prismaClient";

// connect();

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;
  // const validator = vine.compile(loginSchema);
  // const output = await validator.validate(body);
  const user: any = await prisma.admin.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    const checkPassword = bcrypt.compareSync(password, user.hashedPassword);
    if (checkPassword) {
      return NextResponse.json(
        {
          status: 200,
          message: "admin logged in sucessfully !",
        },
        { status: 200 }
      );
    }
  }
  return NextResponse.json(
    { status: 404, message: "Check your cridentials and try again" },
    { status: 200 }
  );
}
