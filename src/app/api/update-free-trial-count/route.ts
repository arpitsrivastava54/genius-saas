import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "@/models/user";

export async function GET(request: NextRequest) {
 const token = request.cookies.get("authToken")?.value || "";
 try {
  
  const data:any = jwt.verify(token, process.env.JWT_SECRET!);

  const user = await UserModel.findById({_id:data.id})

  if(!user) throw new Error("Invalid Token Please Login Again")
  
  if(user.freeUseCount == 5) throw new Error ("Free Trial Over Please Upgrade Your Plan !")
    user.freeUseCount = user.freeUseCount + 1;
  
    await user.save()
  
  return NextResponse.json({success:true,msg:"Update count successfully"},{status:200});
} catch (error:any) {
  return NextResponse.json({success:false,msg:error.message || "Token Expires"},{status:400});
 }
}
