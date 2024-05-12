import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import UserModel from "@/models/user";

import { dbConnect } from "@/lib/dbConnection";

export async function POST(request: NextRequest) {

 await dbConnect();

 const { email, password } = await request.json();

 try {

  if (!email || !password) throw new Error("All fields are required");
  
  const user = await UserModel.findOne({ email });

  if (!user) throw new Error("Email or Password is incorrect");
  
  const decodePassword = await bcrypt.compare(password, user.password);

  if(!decodePassword) throw new Error("Email or Password is incorrect");

  const token = jwt.sign({email,id:user._id},process.env.JWT_SECRET!,{expiresIn:"1d"})

  const response =  NextResponse.json(
   { success: true, msg: "Signin Successful" },
   { status: 200 }
  );
  response.cookies.set("authToken",token,{httpOnly:true});

  return response;

 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: error.message },
   { status: 400 }
  );
 }

}
