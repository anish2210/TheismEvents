import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false,
  auth: {
    type: 'login',
    user: process.env.MAILERSEND_SMTP_USER!,
    pass: process.env.MAILERSEND_SMTP_PASS!,
  },
  tls: { rejectUnauthorized: false },
});

const TO_EMAIL = 'info@theismevents.in';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, interest, message } = await req.json();

    if (!name || !email || !interest || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    console.log(`[/api/contact] Sending enquiry from "${name}" <${email}> → ${TO_EMAIL}`);

    await transporter.sendMail({
      from: `"Theism Events Website" <${process.env.MAILERSEND_SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry: ${interest} — ${name}`,
      html: `
        <h2 style="color:#b91c1c;font-family:sans-serif;">New Enquiry from Theism Events Website</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 0;color:#71717a;width:140px;">Name</td><td style="padding:8px 0;color:#111;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#71717a;">Email</td><td style="padding:8px 0;color:#111;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#71717a;">Phone</td><td style="padding:8px 0;color:#111;">${phone || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#71717a;">Interest</td><td style="padding:8px 0;color:#111;">${interest}</td></tr>
          <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;">Message</td><td style="padding:8px 0;color:#111;white-space:pre-line;">${message}</td></tr>
        </table>
      `,
    });

    console.log(`[/api/contact] Email delivered successfully to ${TO_EMAIL}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
