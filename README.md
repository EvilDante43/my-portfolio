# Soumya Shukla – Portfolio

React + Vite + Tailwind frontend, Node/Express backend with a Gmail-powered contact form (Nodemailer) and an optional MongoDB archive of messages.

```
portfolio/
├── frontend/   React app (Vercel)   – resume at public/Soumya_Shukla_Resume.pdf
└── backend/    Express API (Render) – POST /api/contact, GET /health
```

## Run locally (Node 18+)

```bash
# backend
cd backend && cp .env.example .env    # fill in EMAIL_PASS (and MONGODB_URI if wanted)
npm install && npm run dev            # http://localhost:5000

# frontend (new terminal)
cd frontend && cp .env.example .env   # VITE_API_URL=http://localhost:5000
npm install && npm run dev            # http://localhost:5173
```

## Gmail App Password (required for the contact form)

1. Turn on 2-Step Verification for soumyashukla08april@gmail.com.
2. Open https://myaccount.google.com/apppasswords and create an app password.
3. Paste the 16-character value (no spaces) into `EMAIL_PASS`. Never use your normal Gmail password.

## MongoDB Atlas (optional)

Every message is emailed. If `MONGODB_URI` is set, a copy is also stored. Create a free M0 cluster, add a database user, allow network access (0.0.0.0/0 for Render), and copy the connection string into `MONGODB_URI`. If the database is down, the contact form still works.

## Environment variables

| Backend | Value |
|---|---|
| `PORT` | 5000 (Render sets this itself) |
| `MONGODB_URI` | Atlas connection string (optional) |
| `EMAIL_USER` | soumyashukla08april@gmail.com |
| `EMAIL_PASS` | Gmail app password |
| `CLIENT_URL` | Frontend origin(s), comma-separated, e.g. `https://your-site.vercel.app` |

Frontend: `VITE_API_URL` = your Render backend URL, no trailing slash.

## Deploy

**Backend → Render:** New Web Service from the repo. Root directory `backend`, build `npm install`, start `npm start`, health check path `/health`. Add the env vars above, with `CLIENT_URL` set to your Vercel URL (and custom domain, if any).

**Frontend → Vercel:** Import the repo. Root directory `frontend`, framework Vite (build `npm run build`, output `dist`). Add `VITE_API_URL` pointing to the Render URL, then redeploy. The resume is served at `/Soumya_Shukla_Resume.pdf`.

Render's free tier sleeps when idle, so the first submission after a quiet period can take 30–60 seconds.

## Notes

- Project previews are stylised CSS mockups, not screenshots. To use real screenshots, add images to `frontend/src/assets/` and swap them into `components/Preview.jsx` with `loading="lazy"`.
- No GitHub links are shown on projects because no repository URLs were provided.
