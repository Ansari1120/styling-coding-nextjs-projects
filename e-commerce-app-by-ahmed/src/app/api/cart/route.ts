import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async (request: Request) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log("error");
    return NextResponse.json({ message: "something went wrong" });
  }
};
export const POST = async (request: Request) => {
  const req = await request.json();
  const uid = uuid();
  const setCookies = cookies();
  const validation = cookies().get("user_id");

  if (!validation) {
    setCookies.set("user_id", uid);
  }
  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: validation?.value as string,
        size: "lg",
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log("error");
    return NextResponse.json({ message: "something went wrong" });
  }
};
