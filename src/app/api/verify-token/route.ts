import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
 const token = request.cookies.get("authToken")?.value || "";
 try {
  jwt.verify(token, process.env.JWT_SECRET!);
  return NextResponse.json({success:true,msg:"ok"},{status:200});
} catch (error) {
  request.cookies.delete("authToken")
  return NextResponse.json({success:false,msg:"Token Expires"},{status:400});
 }
}
