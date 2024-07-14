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

    const formData = await req.formData();
    const attachment = formData.get("attachment") as File;
    const attachmentBuffer = await attachment.arrayBuffer();
    const attachmentBase64 = Buffer.from(attachmentBuffer).toString("base64");

    const newUser = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      mobileNo: formData.get("phone") as string,
      subject: formData.get("subject") as string,
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
    <h1>${newUser.name} wants to connect with you!</h1>
      
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
        attachments: [
          {
            filename: attachment.name, // Adjust the filename and mime type as needed
            content: attachmentBase64,
            encoding: "base64",
          },
        ],
      }),
    });

    if (newRes.ok) {
      const data = await newRes.json();
    } else {
      console.error("Error sending email:", newRes.status);
    }

    const userEmailTemplate = (newUser: any) => `
    <h1>APTICON Conference 2024 - Thank You for Reaching Out!</h1>
    `;

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
        attachments: [
          {
            filename: attachment.name, // Adjust the filename and mime type as needed
            content: attachmentBase64,
            encoding: "base64",
          },
        ],
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
