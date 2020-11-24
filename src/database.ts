import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;

const baseOptions = { useNewUrlParser: true, useUnifiedTopology: true };



let cachedDb: MongoClient = null;

export function getDatabase(): Promise<MongoClient> {
  if (cachedDb) {
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(MONGODB_URI).then((db) => {
    cachedDb = db;
    return cachedDb;
  });
}