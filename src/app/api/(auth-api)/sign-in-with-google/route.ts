import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import UserModel from "@/models/user";

import { dbConnect } from "@/lib/dbConnection";

export async function POST(request: NextRequest) {

 await dbConnect();

 const { email,name } = await request.json();

 try {

  if (!email) throw new Error("All fields are required");
  
  const user = await UserModel.findOne({ email });

  const payload = {
    email:"",
    id: ""
  }
  if (!user) {
    const newUser = await UserModel.create({ email ,name});
    if(!newUser) throw new Error("Signin Failed Try Again");
    payload.email = newUser.email;
    payload.id = newUser._id;
  }else{
    payload.email = user.email;
    payload.id = user._id;
  }
  
  const token = jwt.sign(payload,process.env.JWT_SECRET!,{expiresIn:"1d"})
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
