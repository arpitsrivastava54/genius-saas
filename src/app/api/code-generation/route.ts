import { getDatafromToken } from "@/helpers/getDataFromToken";
import { generateCode, sendGptMessage } from "@/helpers/modelAPI";
import { dbConnect } from "@/lib/dbConnection";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
 await dbConnect();

 const body = await request.json();
 const token = request.cookies.get("authToken")?.value || "";

 const { message } = body;

 try {
  if (!message) throw new Error("Please enter a message !");

  //checking token validity -----------------------------------------
  // check token validity if it's expires return from here ..

  const decodedToken = getDatafromToken(token);
  if (!decodedToken) {
   const resp = NextResponse.json(
    { success: false, msg: "Session Time out Please login !" },
    { status: 401 }
   );

   resp.cookies.delete("authToken");
   return resp;
  }
  //checking token validity -----------------------------------------

  const user = await UserModel.findById({ _id: decodedToken?.id });
  if (!user) throw new Error("Session Time out Please Login Again");

  if (user.freeUseCount == 5)
   throw new Error("Free Trial Over Please Upgrade Your Plan !");

  const resp = await generateCode(message);
  if (!resp.success) throw new Error("Something Went Wrong Please try again !");

  user.freeUseCount = user.freeUseCount + 1;
  await user.save();

  return NextResponse.json(
   { success: true, msg: "Message received", data: resp.code },
   { status: 200 }
  );
 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: error.message || "No message found" },
   { status: 403 }
  );
 }
}
