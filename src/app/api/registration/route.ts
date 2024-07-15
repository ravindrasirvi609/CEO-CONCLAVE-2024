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

    const { name, email, phone, affiliation, registrationType } =
      await req.json();

    const newUser = {
      name,
      email,
      phone,
      affiliation,
      registrationType,
    };

    const adminEmailTemplate = (newUser: any) => `
    <html>
    <body style="font-family: 'Arial', sans-serif; background-color: #F5E7B2; margin: 0; padding: 70px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #6c0707; text-align: center; font-size: 28px; margin-bottom: 30px;">New Registration for CEO Conclave</h1>
        <div style="background-color: #F9D689; padding: 30px; border-radius: 10px; margin-top: 30px;">
          <p style="margin: 15px 0; font-size: 16px;"><strong style="color: #6c0707;">Name:</strong> ${newUser.name}</p>
          <p style="margin: 15px 0; font-size: 16px;"><strong style="color: #6c0707;">Email:</strong> ${newUser.email}</p>
          <p style="margin: 15px 0; font-size: 16px;"><strong style="color: #6c0707;">Phone:</strong> ${newUser.phone}</p>
          <p style="margin: 15px 0; font-size: 16px;"><strong style="color: #6c0707;">Affiliation:</strong> ${newUser.affiliation}</p>
          <p style="margin: 15px 0; font-size: 16px;"><strong style="color: #6c0707;">Registration Type:</strong> ${newUser.registrationType}</p>
        </div>
      </div>
    </body>
  </html>
    `;

    const userEmailTemplate = (newUser: any) => `
      <html>
    <body style="font-family: 'Arial', sans-serif; background-color: #F5E7B2; margin: 0; padding: 70px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #6c0707; text-align: center; font-size: 28px; margin-bottom: 20px;">CEO Conclave 2024</h1>
        <h2 style="color: #E0A75E; text-align: center; font-size: 22px; margin-bottom: 30px;">Nurturing Future of the Pharmaceuticals Industry</h2>
        <p style="color: #6c0707; font-size: 20px; text-align: center; margin-bottom: 30px;">
          Thank You for Registering, ${newUser.name}!
        </p>
        <div style="background-color: #F9D689; padding: 30px; border-radius: 10px; margin-top: 30px;">
          <p style="margin: 15px 0; font-size: 16px;">We're excited to have you join us for the CEO Conclave 2024!</p>
          <p style="margin: 15px 0; font-size: 16px;">The event is organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation.</p>
          <p style="margin: 20px 0 10px; font-size: 18px; font-weight: bold;">Your registration details:</p>
          <ul style="margin: 0 0 20px; padding-left: 20px;">
            <li style="margin: 10px 0; font-size: 16px;">Registration Type: ${newUser.registrationType}</li>
            <li style="margin: 10px 0; font-size: 16px;">Affiliation: ${newUser.affiliation}</li>
          </ul>
          <p style="margin: 15px 0; font-size: 16px;">We'll be in touch with more information as the event approaches.</p>
        </div>
      </div>
    </body>
  </html>
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
        subject: `CEO Conclave 2024 - Registration Confirmation`,
        html: userEmailTemplate(newUser),
      }),
    });

    if (!userResponse.ok) {
      throw new Error(`Error sending user email: ${userResponse.status}`);
    }

    await appendRowToSheet([
      newUser.name,
      newUser.email,
      newUser.phone,
      newUser.affiliation,
      newUser.registrationType,
    ]);

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
