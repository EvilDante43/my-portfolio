import mongoose from 'mongoose';

mongoose.set('bufferCommands', false); // fail fast instead of hanging when DB is down

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('[db] MONGODB_URI not set - messages will be emailed but not stored.');
    return false;
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log('[db] MongoDB connected');
    return true;
  } catch (err) {
    console.error('[db] MongoDB connection failed:', err.message);
    return false;
  }
}

export const dbReady = () => mongoose.connection.readyState === 1;
