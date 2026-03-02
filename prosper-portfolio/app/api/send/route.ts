import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Prosper Portfolio <onboarding@resend.dev>', // Use your verified domain later
      to: ['obenggyanp@gmail.com'], // Where YOU want to receive the message
      subject: `New Lead: ${name} via Prosper OG Portfolio`,
      html: `
        <h2>New Message from Prospixel Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}