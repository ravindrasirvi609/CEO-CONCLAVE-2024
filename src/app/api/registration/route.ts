import { appendRowToSheet } from "@/ googleSheets";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Missing Resend API key. Set the RESEND_API_KEY environment variable."
      );
    }

    const { name, email } = await req.json();

    const newUser = {
      name,
      email,
    };

    const adminEmailTemplate = (newUser: { name: string }) => `
      <h1>New registration</h1>
      <p>${newUser.name} has registered for CEO Conclave</p>
    `;

    const userEmailTemplate = (newUser: { name: string }) => `
      <h1>Thank you for registering</h1>
      <p>Hi ${newUser.name},</p>
    `;

    const resend = new Resend(apiKey);
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "admin@opf.org.in",
        to: ["ravi.sirvi609@gmail.com"],
        subject: `New registration: ${newUser.name}`,
        html: adminEmailTemplate(newUser),
      }),
    });

    if (!adminResponse.ok) {
      throw new Error(`Error sending admin email: ${adminResponse.status}`);
    }

    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "admin@opf.org.in",
        to: newUser.email,
        subject: `APTICON 2024, Thank you for registering`,
        html: userEmailTemplate(newUser),
      }),
    });

    if (!userResponse.ok) {
      throw new Error(`Error sending user email: ${userResponse.status}`);
    }
    await appendRowToSheet([newUser.name, newUser.email]);
    return NextResponse.json({
      message: "Registration successful",
      user: newUser,
    });
  } catch (error: any) {
    console.error("Error handling registration:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
