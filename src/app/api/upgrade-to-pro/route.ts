import { getDatafromToken } from "@/helpers/getDataFromToken";
import { dbConnect } from "@/lib/dbConnection";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
 await dbConnect();

 const token = request.cookies.get("authToken")?.value || "";

 try {
  const decodedToken = getDatafromToken(token);
  if (!decodedToken) {
   const resp = NextResponse.json(
    { success: false, msg: "Session Time out Please login !" },
    { status: 401 }
   );

   resp.cookies.delete("authToken");
   return resp;
  }

  const user = await UserModel.findById({ _id: decodedToken?.id });
  if (!user) throw new Error("Session Time out Please Login Again");

  user.isPro = true;
  await user.save();
  
  return NextResponse.json(
   { success: true, msg: "Subscription Successfull"},
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   { success: false, msg: "Subscription failed" },
   { status: 408 }
  );
 }
}
