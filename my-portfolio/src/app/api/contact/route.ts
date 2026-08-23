import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Lấy thông tin từ biến môi trường
    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;

    if (!userEmail || !userPass) {
      console.error('Email configuration is missing in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Cấu hình transporter (dùng Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // 1. Email gửi cho CHÍNH BẠN (Owner) để thông báo có người liên hệ
    const mailToOwner = {
      from: `"Portfolio Contact" <${userEmail}>`,
      to: userEmail,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6b21a8;">New message from your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f3f4f6; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    };

    // 2. Email tự động gửi cảm ơn cho NGƯỜI DÙNG (Khách)
    const mailToSender = {
      from: `"Hieu Vo - Portfolio" <${userEmail}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nHieu Vo`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #6b21a8;">Thank You for Reaching Out!</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>I have successfully received your message. I appreciate your interest and will review your message shortly. I'll get back to you as soon as possible.</p>
          <br/>
          <p>Here is a copy of your message for reference:</p>
          <blockquote style="border-left: 4px solid #a855f7; padding-left: 10px; color: #555; background: #f9fafb; padding: 10px; border-radius: 4px;">
            ${message}
          </blockquote>
          <br/>
          <p>Best regards,</p>
          <p><strong>Hieu Vo (Havi)</strong><br/>Software Developer</p>
        </div>
      `,
    };

    // Gửi cả 2 email
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToSender),
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
