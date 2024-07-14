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

    const formData = await req.json();

    const newUser = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      mobileNo: formData.get("phone") as string,
      createdAt: new Date().toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    const adminEmailTemplate = (newUser: any) => `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #F5E7B2; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
            <h1 style="color: #6c0707; text-align: center;">New Connection Request</h1>
            <p style="color: #E0A75E; font-size: 18px; text-align: center;">
              ${newUser.name} wants to connect with you!
            </p>
            <div style="background-color: #F9D689; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Name:</strong> ${newUser.name}</p>
              <p><strong>Email:</strong> ${newUser.email}</p>
              <p><strong>Phone:</strong> ${newUser.mobileNo}</p>
              <p><strong>Message:</strong> ${newUser.message}</p>
              <p><strong>Submitted on:</strong> ${newUser.createdAt}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const userEmailTemplate = (newUser: any) => `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #F5E7B2; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
            <h1 style="color: #6c0707; text-align: center;">CEO Conclave 2024</h1>
            <h2 style="color: #E0A75E; text-align: center;">Nurturing Future of the Pharmaceuticals Industry</h2>
            <p style="color: #6c0707; font-size: 18px; text-align: center;">
              Thank You for Reaching Out, ${newUser.name}!
            </p>
            <div style="background-color: #F9D689; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p>We have received your message and will get back to you shortly.</p>
              <p>The CEO Conclave is organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation.</p>
              <p>We look forward to your participation in this exciting event!</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const newResend = new Resend(apiKey);
    const newRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "admin@opf.org.in",
        to: ["ravi.sirvi609@gmail.com"],
        subject: `${newUser.name} wants to connect with you!`,
        html: adminEmailTemplate(newUser),
      }),
    });

    if (newRes.ok) {
      const data = await newRes.json();
    } else {
      console.error("Error sending email:", newRes.status);
    }

    const userResend = new Resend(apiKey);
    const userRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "admin@opf.org.in",
        to: `${newUser.email}`,
        subject: `Thanks for Connecting, ${newUser.name}`,
        html: userEmailTemplate(newUser),
      }),
    });

    if (userRes.ok) {
      const data = await userRes.json();
    } else {
      console.error("Error sending email:", userRes.status);
    }

    return NextResponse.json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (error: any) {
    console.error("Error adding user:", error.message);
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
