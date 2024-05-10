import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedConnection:null | typeof mongoose = null;

export const dbConnect = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }
  const db = await mongoose.connect(MONGODB_URI);
  cachedConnection = db;
  return db;
};
