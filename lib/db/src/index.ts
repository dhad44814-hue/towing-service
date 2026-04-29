import { MongoClient, Db } from "mongodb";

let client: MongoClient;
let db: Db;

export async function connectDB() {
  if (!db) {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL must be set in environment variables");
    }
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db = client.db("towing_service");
    console.log("✅ MongoDB connected");
  }
  return db;
}

export function getDB() {
  if (!db) {
    throw new Error("Database not connected. Call connectDB() first");
  }
  return db;
}

export { client };
export * from "./schema";
