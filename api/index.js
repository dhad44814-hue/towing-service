import app from "../artifacts/api-server/src/app";
import { connectDB } from "../lib/db/src/index";

let dbConnected = false;

export default async function handler(req, res) {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
  return app(req, res);
}
