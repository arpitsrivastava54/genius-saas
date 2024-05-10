import { NextRequest, NextResponse } from "next/server";

import { dbConnect } from "@/lib/dbConnection";

export async function GET(request: NextRequest) {
 try {
  const response =  NextResponse.json(
   { success: true, msg: "Logout Successful" },
   { status: 200 }
  );
  response.cookies.delete("authToken");

  return response;

 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: "Logout Failed please try agian !" },
   { status: 400 }
  );
 }

}
