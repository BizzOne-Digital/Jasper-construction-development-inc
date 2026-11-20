import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
import { estimateSchema } from "@/lib/validation";
export async function POST(request: NextRequest) {
  if (Number(request.headers.get("content-length") || 0) > 16000)
    return NextResponse.json(
      { message: "Please shorten your request." },
      { status: 413 },
    );
  const origin = request.headers.get("origin");
  if (
    origin &&
    (() => {
      try {
        return new URL(origin).host !== request.headers.get("host");
      } catch {
        return true;
      }
    })()
  )
    return NextResponse.json(
      { message: "Please submit your request from this website." },
      { status: 403 },
    );
  let input: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 16000)
      return NextResponse.json(
        { message: "Please shorten your request." },
        { status: 413 },
      );
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { message: "Please provide a valid request." },
      { status: 400 },
    );
  }
  const result = estimateSchema.safeParse(input);
  if (!result.success)
    return NextResponse.json(
      {
        message: "Please check your details and try again.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  if (result.data.website)
    return NextResponse.json(
      {
        message:
          "Your request could not be submitted. Please call or email us.",
      },
      { status: 400 },
    );
  const user = process.env.GMAIL_USER,
    pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  if (!user || !pass)
    return NextResponse.json(
      {
        message:
          "Online estimates are not available just yet. Please call or email Jasper directly to discuss your project.",
      },
      { status: 503 },
    );
  const { name, email, phone, service, details } = result.data;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      connectionTimeout: 12000,
      socketTimeout: 12000,
    });
    await transporter.sendMail({
      from: { name: "Jasper Website", address: user },
      to: process.env.ESTIMATE_TO || "jasperconstructioninc@gmail.com",
      replyTo: { name, address: email },
      subject: "Website estimate request: " + service,
      text: [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (phone || "Not supplied"),
        "Service: " + service,
        "",
        "Project details:",
        details,
      ].join("\n"),
    });
    return NextResponse.json({
      message:
        "Thank you. Your estimate request has been sent to Jasper. We look forward to discussing your project.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not send your request right now. Please call or email Jasper directly.",
      },
      { status: 502 },
    );
  }
}
