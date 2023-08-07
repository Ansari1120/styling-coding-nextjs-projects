import { connect } from "@/lib/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { loginSchema, registerSchema } from "@/validator/authSchema";
import JSONAPIJSONAPIErrorReporter from "@/validator/errorReport";
import bcrypt from "bcryptjs";
import { User } from "@/model/userModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validator = vine.compile(loginSchema);
    const output = await validator.validate(body);
    const user = await User.findOne({ email: output.email });
    if (user) {
      const checkPassword = bcrypt.compareSync(output.password!, user.password);
      if (checkPassword) {
        return NextResponse.json(
          {
            status: 200,
            message: "user logged in sucessfully !",
          },
          { status: 200 }
        );
      }
    }
    return NextResponse.json(
      { status: 404, message: "Check your cridentials and try again" },
      { status: 200 }
    );
  } catch (e) {
    if (e instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, errors: e.messages },
        { status: 200 }
      );
    }
  }
}
