import { Router, type Router as ExpressRouter } from "express";
import { ObjectId } from "mongodb";
import { getDB, insertTestimonialSchema } from "@workspace/db";

const router: ExpressRouter = Router();

router.post("/testimonials", async (req, res) => {
  try {
    const data = insertTestimonialSchema.parse(req.body);
    const db = getDB();
    const result = await db.collection("testimonials").insertOne({ ...data, createdAt: new Date() });
    return res.status(201).json({ _id: result.insertedId, ...data });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

router.get("/testimonials", async (_req, res) => {
  try {
    const db = getDB();
    const testimonials = await db.collection("testimonials").find({ approved: true }).sort({ createdAt: -1 }).toArray();
    return res.json(testimonials);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/testimonials/all", async (_req, res) => {
  try {
    const db = getDB();
    const testimonials = await db.collection("testimonials").find().sort({ createdAt: -1 }).toArray();
    return res.json(testimonials);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

router.patch("/testimonials/:id/approve", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("testimonials").findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { approved: true } },
      { returnDocument: "after" }
    );
    if (!result) return res.status(404).json({ error: "Not found" });
    return res.json(result);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

router.delete("/testimonials/:id", async (req, res) => {
  try {
    const db = getDB();
    await db.collection("testimonials").deleteOne({ _id: new ObjectId(req.params.id) });
    return res.json({ success: true });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default router;
