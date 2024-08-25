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
      name: formData.name as string,
      email: formData.email as string,
      message: formData.message as string,
      mobileNo: formData.phone as string,
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
    <body style="font-family: 'Arial', sans-serif; background-color: #F5E7B2; margin: 0; padding: 70px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #6c0707; text-align: center; font-size: 28px; margin-bottom: 20px;">New Connection Request</h1>
        <p style="color: #E0A75E; font-size: 20px; text-align: center; margin-bottom: 30px;">
          ${newUser.name} wants to connect with you!
        </p>
        <div style="background-color: #F9D689; padding: 25px; border-radius: 10px; margin-top: 20px;">
          <p style="margin: 10px 0;"><strong style="color: #6c0707;">Name:</strong> ${newUser.name}</p>
          <p style="margin: 10px 0;"><strong style="color: #6c0707;">Email:</strong> ${newUser.email}</p>
          <p style="margin: 10px 0;"><strong style="color: #6c0707;">Phone:</strong> ${newUser.mobileNo}</p>
          <p style="margin: 10px 0;"><strong style="color: #6c0707;">Message:</strong> ${newUser.message}</p>
          <p style="margin: 10px 0;"><strong style="color: #6c0707;">Submitted on:</strong> ${newUser.createdAt}</p>
        </div>
      </div>
    </body>
  </html>
    `;

    const userEmailTemplate = (newUser: any) => `
      <html>
    <body style="font-family: 'Arial', sans-serif; background-color: #F5E7B2; margin: 0; padding: 70px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #6c0707; text-align: center; font-size: 28px; margin-bottom: 10px;">CEO Conclave 2024</h1>
        <h2 style="color: #E0A75E; text-align: center; font-size: 20px; margin-bottom: 30px;">Nurturing Future of the Pharmaceuticals Industry</h2>
        <p style="color: #6c0707; font-size: 22px; text-align: center; margin-bottom: 30px;">
          Thank You for Reaching Out, ${newUser.name}!
        </p>
        <div style="background-color: #F9D689; padding: 25px; border-radius: 10px; margin-top: 20px;">
          <p style="margin: 15px 0; font-size: 16px;">We have received your message and will get back to you shortly.</p>
          <p style="margin: 15px 0; font-size: 16px;">The CEO Conclave is organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation.</p>
          <p style="margin: 15px 0; font-size: 16px;">We look forward to your participation in this exciting event!</p>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <a href="#" style="background-color: #6c0707; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Learn More About the Event</a>
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
        to: [
          "ravi.sirvi609@gmail.com",
          "rakesh.mishra@dypvp.edu.in",
          "admin@opf.org.in",
        ],
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
