import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
 });
 const items = (await request.json()).items as any[];

 const lineItems = items.map(item => ({
  price_data: {
    currency: 'inr',
    product_data: {
      name: item.name,
      description: item.description,
      images: [item.image],
    },
    unit_amount: item.price * 100, // Stripe expects amount in cents
  },
  quantity: item.quantity || 1,
}));
 try {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'https://monkeycloth.vercel.app/success-payment?session_id=fsdfsdfsdj45465461231fsdjfdskfj',
    cancel_url: 'https://monkeycloth.vercel.app/',
  });

  return NextResponse.json(
   { success: true, msg: "Session id Created", data: session.id },
   { status: 200 }
  );
 } catch (error) {
  console.log(error)
  return NextResponse.json(
   { success: false, msg: "Session id Created failed" },
   { status: 408 }
  );
 }
}
