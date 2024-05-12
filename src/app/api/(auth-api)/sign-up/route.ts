import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

import UserModel from "@/models/user";

import { dbConnect } from "@/lib/dbConnection";

export async function POST(request: NextRequest) {

 await dbConnect();

 const { name, email, password } = await request.json();

 try {
  if (!name || !email || !password) throw new Error("All fields are required");

  const alreadyUserExist = await UserModel.findOne({ email });

  if (alreadyUserExist) throw new Error("User Already Exists");

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await UserModel.create({ name, email, password:hashedPassword });

  if (!user) throw new Error("Signup Failed Try Again");

  return NextResponse.json(
   { success: true, msg: "Signup Successful" },
   { status: 200 }
  );
 } catch (error: any) {
  return NextResponse.json(
   { success: false, msg: error.message },
   { status: 400 }
  );
 }

}
