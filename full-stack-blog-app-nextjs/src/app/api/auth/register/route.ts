import { connect } from "@/lib/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { registerSchema } from "@/validator/authSchema";
import JSONAPIJSONAPIErrorReporter from "@/validator/errorReport";
import bcrypt from "bcryptjs";
import { User } from "@/model/userModel";

connect();

interface UserPayload {
  name: string;
  email: string;
  password: string;
  avtar?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: UserPayload = await request.json();
    //vine.errorReporter = () => new JSONAPIErrorReporter();
    const validator = vine.compile(registerSchema);
    const output = await validator.validate(body);
    try {
      const user = await User.findOne({ email: output.email });
      if (user) {
        return NextResponse.json(
          {
            status: 400,
            errors: {
              email: "Email is already used.",
            },
          },
          { status: 200 }
        );
      } else {
        const salt = bcrypt.genSaltSync(10);
        output.password = bcrypt.hashSync(output.password, salt);
        await User.create(output);
        return NextResponse.json(
          {
            status: 200,
            msg: "account created sucessfully.please login to your account",
          },
          { status: 200 }
        );
      }
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
