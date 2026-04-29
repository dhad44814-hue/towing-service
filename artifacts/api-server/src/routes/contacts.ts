import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDB, insertContactSchema } from "@workspace/db";

const router = Router();

router.post("/contacts", async (req, res) => {
  try {
    const data = insertContactSchema.parse(req.body);
    const db = getDB();
    const result = await db.collection("contacts").insertOne({ ...data, createdAt: new Date() });
    res.status(201).json({ _id: result.insertedId, ...data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/contacts", async (_req, res) => {
  try {
    const db = getDB();
    const contacts = await db.collection("contacts").find().sort({ createdAt: -1 }).toArray();
    res.json(contacts);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
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
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/contacts/:id", async (req, res) => {
  try {
    const db = getDB();
    await db.collection("contacts").deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
