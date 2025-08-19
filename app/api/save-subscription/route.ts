import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email, userName, razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = await req.json();

  // Verify signature
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY!)
    .update(razorpay_payment_id + "|" + razorpay_subscription_id)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
  }

  // Save to database
  await db.insert(UserSubscription).values({
    email,
    userName,
    active: true,
    paymentId: razorpay_payment_id,
    joinDate: new Date().toLocaleDateString(),
  });

  return NextResponse.json({ success: true });
}
