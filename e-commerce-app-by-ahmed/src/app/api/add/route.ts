import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";
import { and, eq } from "drizzle-orm";

export const GET = async () => {
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
  {
    /* generating user id randomly and adding it to cookies to save it as a user authentication until connecting third party login signup functionality */
  }
  const uid = uuid();
  const setCookies = cookies();
  const user_id = cookies().get("user_id");

  if (!user_id) {
    setCookies.set("user_id", uid);
  } else {
    console.log("id exist");
  }
  try {
    let res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        user_id: cookies().get("user_id")?.value as string,
        size: req.size,
        price: req.price,
        type: req.type,
        category: req.category,
        //  productname: 'req.productname',
        productname: req.productname,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log("something went while posting data ");
    return NextResponse.json({
      message: "something went while posting data ",
      error,
    });
  }
};

export async function PUT(req: NextRequest) {
  let request = await req.json();
  try {
    let response = await db
      .update(cartTable)
      .set(request)
      .where(
       and (eq(cartTable.product_id, request.product_id),
        eq(cartTable.user_id, request.user_id))
      )
      .returning();
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
export async function DELETE(req: NextRequest) {
  let url = req.nextUrl.searchParams;

  try {
    if (url.has("product_id") && url.has("user_id")) {
      let response = await db
        .delete(cartTable)
        .where(
         and(eq(cartTable.product_id, url.get("product_id") as string),
          eq(cartTable.user_id, url.get("user_id") as string))
        )
        .returning();
      return NextResponse.json({ response });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}
