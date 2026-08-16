import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const recipientEmail = "dhaniyeldarvesh7@gmail.com";
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;

    // Check if configuration is missing
    if (!smtpUser || !smtpPass) {
      console.warn(
        "SMTP environment variables are missing (SMTP_USER/GMAIL_USER, SMTP_PASS/GMAIL_APP_PASS). Email simulated successfully.",
      );
      console.log("Inquiry details:", { name, email, service, message });

      // Simulate success so frontend doesn't show a hard failure during development
      return NextResponse.json({
        success: true,
        message:
          "Inquiry simulated successfully. Please configure SMTP env variables to receive live emails.",
        simulated: true,
      });
    }

    // Configure SMTP transport (defaults to Gmail configuration)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name} via capsloop" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `🔥 New capsloop Inquiry: ${service} by ${name}`,
      text: `New inquiry from capsloop website.\n\nName: ${name}\nEmail: ${email}\nService Required: ${service}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #000000; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #333333;">
          <div style="text-align: center; border-bottom: 2px solid #ff5e00; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #ff5e00; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: -1px;">capsloop</h1>
            <p style="color: #888888; font-size: 14px; margin: 5px 0 0 0;">New Project Inquiry Transmitted</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #888888; width: 130px; font-size: 14px; text-transform: uppercase; font-weight: bold;">Client Name:</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-size: 14px; text-transform: uppercase; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 15px;"><a href="mailto:${email}" style="color: #ff8533; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-size: 14px; text-transform: uppercase; font-weight: bold;">Service:</td>
              <td style="padding: 8px 0; color: #ff5e00; font-size: 15px; font-weight: bold;">${service}</td>
            </tr>
          </table>

          <div style="background-color: #0d0d0d; border-left: 4px solid #ff5e00; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #ffffff; margin-top: 0; margin-bottom: 10px; font-size: 15px; text-transform: uppercase; font-weight: bold;">Project Details:</h3>
            <p style="color: #ededed; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid #1f1f1f; padding-top: 20px; text-align: center;">
            <p style="color: #888888; font-size: 12px; margin: 0;">This email was sent dynamically from the capsloop agency contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully to capsloop studio!",
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error while processing your inquiry" },
      { status: 500 },
    );
  }
}
