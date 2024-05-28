import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
 });
 const { sessionId } = await request.json();

 try {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const payment_status = session.payment_status;

  if(payment_status !== "paid") {
    throw new Error("Payment Failed");
  }
  return NextResponse.json(
   { success: true, msg: "Payment Successfull", data: payment_status },
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   { success: false, msg: "Payment Failed" },
   { status: 500 }
  );
 }
}
