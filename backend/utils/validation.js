import { z } from 'zod';

// Strip control characters; collapse line breaks for single-line fields (blocks header injection).
const stripControl = (s) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
const singleLine = (s) => stripControl(s).replace(/[\r\n\t]+/g, ' ').trim();

export const contactSchema = z.object({
  name: z.string({ required_error: 'Name is required.' }).transform(singleLine)
    .pipe(z.string().min(2, 'Name must be at least 2 characters.').max(100, 'Name is too long.')),
  email: z.string({ required_error: 'Email is required.' }).transform(singleLine)
    .pipe(z.string().email('Enter a valid email address.').max(254, 'Email is too long.')),
  subject: z.string({ required_error: 'Subject is required.' }).transform(singleLine)
    .pipe(z.string().min(3, 'Subject must be at least 3 characters.').max(150, 'Subject is too long.')),
  message: z.string({ required_error: 'Message is required.' }).transform((s) => stripControl(s).trim())
    .pipe(z.string().min(10, 'Message must be at least 10 characters.').max(5000, 'Message is too long.')),
});
