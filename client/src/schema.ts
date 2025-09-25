import { z } from "zod";

// Territory types
export const territorySchema = z.object({
  id: z.string(),
  state: z.string(),
  district: z.string(),
  tehsil: z.string(),
  panchayat: z.string(),
  isAvailable: z.string(),
  slotsRemaining: z.string(),
});

export type Territory = z.infer<typeof territorySchema>;

// Franchise inquiry types
export const insertFranchiseInquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  territory: z.string().min(1, "Territory is required"),
  investmentLevel: z.string().min(1, "Investment level is required"),
});

export const franchiseInquirySchema = insertFranchiseInquirySchema.extend({
  id: z.string(),
  createdAt: z.date(),
});

export type InsertFranchiseInquiry = z.infer<typeof insertFranchiseInquirySchema>;
export type FranchiseInquiry = z.infer<typeof franchiseInquirySchema>;

// User types (if needed for future use)
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const userSchema = insertUserSchema.extend({
  id: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;