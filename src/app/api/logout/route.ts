import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
 try {

  const response =  NextResponse.json(
   { success: true, msg: "Logout Successful" },
   { status: 200 }
  );
  response.cookies.delete("authToken");
  response.headers.set("cache-control", "no-cache");
  return response;

 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: "Logout Failed please try agian !" },
   { status: 400 }
  );
 }

}
