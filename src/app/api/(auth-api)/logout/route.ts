import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
 try {

  const response =  NextResponse.json(
   { success: true, msg: "Logout Successful" },
   { status: 200 }
  );
  response.cookies.set("authToken","",{httpOnly:true});
  return response;

 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: "Logout Failed please try agian !" },
   { status: 400 }
  );
 }

}
