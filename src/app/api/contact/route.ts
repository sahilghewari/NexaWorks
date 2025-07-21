
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log('Received contact form:', { name, email, message });
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }


    // Use Resend API to send email
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM || 'no-reply@nexaworks.com';
    const to = process.env.CONTACT_RECEIVER || 'your@email.com';
    const subject = `New Contact Form Submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    console.log('Sending mail with Resend:', { from, to, subject, text });
    const data = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });
    console.log('Resend response:', data);

    return NextResponse.json({ success: true, message: 'Message received and email sent!' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
