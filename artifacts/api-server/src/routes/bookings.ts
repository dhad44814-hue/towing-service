import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDB, insertBookingSchema } from "@workspace/db";

const router = Router();

router.post("/bookings", async (req, res) => {
  try {
    const data = insertBookingSchema.parse(req.body);
    const db = getDB();
    const result = await db.collection("bookings").insertOne({ ...data, createdAt: new Date() });
    res.status(201).json({ _id: result.insertedId, ...data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/bookings", async (_req, res) => {
  try {
    const db = getDB();
    const bookings = await db.collection("bookings").find().sort({ createdAt: -1 }).toArray();
    res.json(bookings);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/bookings/:id", async (req, res) => {
  try {
    const db = getDB();
    const booking = await db.collection("bookings").findOne({ _id: new ObjectId(req.params.id) });
    if (!booking) return res.status(404).json({ error: "Not found" });
    res.json(booking);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.patch("/bookings/:id", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("bookings").findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: "after" }
    );
    if (!result) return res.status(404).json({ error: "Not found" });
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/bookings/:id", async (req, res) => {
  try {
    const db = getDB();
    await db.collection("bookings").deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
