import nodemailer from 'nodemailer';

let transporter;
function getTransporter() {
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) throw new Error('EMAIL_USER / EMAIL_PASS are not configured');
  transporter ??= nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  return transporter;
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function buildHtml({ name, email, subject, message }) {
  const row = (label, value) =>
    `<tr><td style="padding:8px 16px 8px 0;color:#71717a;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;color:#18181b">${value}</td></tr>`;
  return `<!doctype html><html><body style="margin:0;background:#f4f4f5;padding:24px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:10px;padding:28px">
    <p style="margin:0 0 20px;font-size:16px;font-weight:600;color:#18181b">New message received from your portfolio website.</p>
    <table style="border-collapse:collapse;font-size:14px;width:100%">
      ${row('Name:', esc(name))}
      ${row('Email:', `<a href="mailto:${esc(email)}" style="color:#4652dc">${esc(email)}</a>`)}
      ${row('Subject:', esc(subject))}
      ${row('Message:', esc(message).replace(/\n/g, '<br>'))}
    </table>
    <p style="margin:24px 0 0;font-size:12px;color:#a1a1aa">Reply to this email to respond directly to ${esc(name)}.</p>
  </div></body></html>`;
}

export async function sendContactEmail(data) {
  const to = process.env.EMAIL_USER;
  await getTransporter().sendMail({
    from: { name: 'Portfolio Contact', address: to },
    to,
    replyTo: { name: data.name.replace(/["<>]/g, ''), address: data.email },
    subject: `New Portfolio Contact \u2013 ${data.subject}`,
    text: `New message received from your portfolio website.\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
    html: buildHtml(data),
  });
}
