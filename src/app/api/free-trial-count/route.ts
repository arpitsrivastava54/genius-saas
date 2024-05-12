import { NextRequest, NextResponse } from "next/server";

import UserModel from "@/models/user";

import { getDatafromToken } from "@/helpers/getDataFromToken";
import { dbConnect } from "@/lib/dbConnection";

export async function GET(request: NextRequest) {
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

  if (!user) throw new Error("Invalid Token Please Login Again");

  if(user.isPro) return NextResponse.json({ success: true, msg: "PRO"}, { status: 200 });

  return NextResponse.json(
   { success: true, msg: "FREE", data: user.freeUseCount },
   { status: 200 }
  );
 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: error.message || "Token Expires" },
   { status: 401 }
  );
 }
}
