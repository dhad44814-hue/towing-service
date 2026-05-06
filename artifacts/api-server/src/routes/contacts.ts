import { Router, type Router as ExpressRouter } from "express";
import { ObjectId } from "mongodb";
import { getDB, insertContactSchema } from "@workspace/db";

const router: ExpressRouter = Router();

router.post("/contacts", async (req, res) => {
  try {
    const data = insertContactSchema.parse(req.body);
    const db = getDB();
    const result = await db.collection("contacts").insertOne({ ...data, createdAt: new Date() });
    return res.status(201).json({ _id: result.insertedId, ...data });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

router.get("/contacts", async (_req, res) => {
  try {
    const db = getDB();
    const contacts = await db.collection("contacts").find().sort({ createdAt: -1 }).toArray();
    return res.json(contacts);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

router.patch("/contacts/:id/read", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("contacts").findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { read: true } },
      { returnDocument: "after" }
    );
    if (!result) return res.status(404).json({ error: "Not found" });
    return res.json(result);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

router.delete("/contacts/:id", async (req, res) => {
  try {
    const db = getDB();
    await db.collection("contacts").deleteOne({ _id: new ObjectId(req.params.id) });
    return res.json({ success: true });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default router;
