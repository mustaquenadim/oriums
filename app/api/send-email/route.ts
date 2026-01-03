import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message,
    } = body;

    // If a reCAPTCHA secret is configured, require and validate the token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!body.recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA token missing' },
          { status: 400 }
        );
      }

      const verifyRes = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: body.recaptchaToken,
          }),
        }
      );

      const verifyJson = await verifyRes.json();
      if (
        !verifyJson.success ||
        (verifyJson.score !== undefined && verifyJson.score < 0.5) ||
        (verifyJson.action && verifyJson.action !== 'contact')
      ) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 403 }
        );
      }
    }

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;

    if (!from || !to) {
      return NextResponse.json(
        { error: 'Server not configured for email sending' },
        { status: 500 }
      );
    }

    const subject = `New contact from ${firstName} ${lastName} — ${
      projectType || 'General Inquiry'
    }`;

    const htmlMessage = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '—'}</p>
      <p><strong>Company:</strong> ${company || '—'}</p>
      <p><strong>Project Type:</strong> ${projectType || '—'}</p>
      <p><strong>Budget:</strong> ${budget || '—'}</p>
      <p><strong>Timeline:</strong> ${timeline || '—'}</p>
      <h3>Message</h3>
      <p>${(message || '').replace(/\n/g, '<br />')}</p>
    `;

    // Send message to site owner
    await resend.emails.send({
      from,
      to,
      subject,
      html: htmlMessage,
    });

    // Send confirmation email to user
    const confirmationHtml = `
      <p>Hi ${firstName},</p>
      <p>Thanks for reaching out to Oriums! We've received your message and will respond within 1 business day.</p>
      <hr />
      <p><strong>Your message:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br />')}</p>
      <p>— Oriums</p>
    `;

    await resend.emails.send({
      from,
      to: email,
      subject: `Thanks for contacting Oriums`,
      html: confirmationHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('send-email error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
