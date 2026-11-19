import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import { connectDB, dbReady } from './config/db.js';
import contactRoutes from './routes/contact.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;
const origins = (process.env.CLIENT_URL || 'http://localhost:5173').split(',').map((o) => o.trim().replace(/\/$/, ''));

app.set('trust proxy', 1); // Render sits behind a proxy; needed for correct per-IP rate limiting
app.disable('x-powered-by');
app.use(cors({ origin: origins, methods: ['GET', 'POST'] }));
app.use(express.json({ limit: '10kb' }));

app.get('/health', (req, res) => res.json({ status: 'ok', database: dbReady() ? 'connected' : 'unavailable' }));
app.use('/api/contact', contactRoutes);
app.use(notFound);
app.use(errorHandler);

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('[mail] EMAIL_USER / EMAIL_PASS missing - POST /api/contact will return 502 until set.');
}

connectDB().finally(() => {
  app.listen(PORT, () => console.log(`[server] listening on port ${PORT}`));
});
