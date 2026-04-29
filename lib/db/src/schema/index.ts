import { ObjectId } from "mongodb";
import { z } from "zod";

// ─── Booking ─────────────────────────────────────────────────────────────────
export const insertBookingSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional(),
  serviceType: z.string().min(1),
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehicleYear: z.string().optional(),
  pickupAddress: z.string().min(1),
  dropoffAddress: z.string().optional(),
  notes: z.string().optional(),
  status: z.enum(["pending", "confirmed", "in_progress", "completed", "cancelled"]).default("pending"),
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = InsertBooking & { _id: ObjectId; createdAt: Date };

// ─── Contact Message ──────────────────────────────────────────────────────────
export const insertContactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional(),
  message: z.string().min(1),
  read: z.boolean().default(false),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = InsertContact & { _id: ObjectId; createdAt: Date };

// ─── Testimonial ─────────────────────────────────────────────────────────────
export const insertTestimonialSchema = z.object({
  name: z.string().min(1),
  rating: z.number().min(1).max(5),
  review: z.string().min(1),
  location: z.string().optional(),
  approved: z.boolean().default(false),
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = InsertTestimonial & { _id: ObjectId; createdAt: Date };
