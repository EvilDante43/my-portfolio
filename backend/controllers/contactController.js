import { contactSchema } from '../utils/validation.js';
import { sendContactEmail } from '../utils/mailer.js';
import { dbReady } from '../config/db.js';
import Message from '../models/Message.js';

export async function submitContact(req, res) {
  const parsed = contactSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    const errors = {};
    for (const issue of parsed.error.issues) errors[issue.path[0]] ??= issue.message;
    return res.status(400).json({ success: false, message: 'Please correct the highlighted fields.', errors });
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error('[contact] email delivery failed:', err.message);
    return res.status(502).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }

  // Optional archive copy; never blocks or fails the request.
  if (dbReady()) Message.create(parsed.data).catch((e) => console.error('[contact] DB save failed:', e.message));

  return res.status(200).json({ success: true, message: 'Thanks for reaching out! Your message has been sent successfully.' });
}
