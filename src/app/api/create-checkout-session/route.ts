import { getDatafromToken } from "@/helpers/getDataFromToken";
import { dbConnect } from "@/lib/dbConnection";
import { getAbsolutePath } from "@/lib/utils";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
 await dbConnect();
 const dashboardPath = getAbsolutePath("/dashboard")
 const token = request.cookies.get("authToken")?.value || "";

 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
 });

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

  const session = await stripe.checkout.sessions.create({
   line_items: [
    {
     price_data: {
      unit_amount: 500 * 100,
      currency: "inr",
      product_data: {
       name: "Genius AI Platform Subscription",
       description: "World's best AI Platform Subscription for 1 year ",
       images: [
        "https://ai-genius.vercel.app/_next/image?url=%2Flogo.webp&w=32&q=75",
       ],
      },
     },
     quantity: 1,
    },
   ],
   mode: "payment",
   success_url: dashboardPath,
   cancel_url: dashboardPath,
  });

  const user = await UserModel.findById({ _id: decodedToken?.id });
  if (!user) throw new Error("Session Time out Please Login Again");

  user.isPro = true;
  await user.save();

  return NextResponse.json(
   { success: true, msg: "Session id Created", data: session.id },
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   { success: false, msg: "Session id Created failed" },
   { status: 408 }
  );
 }
}
