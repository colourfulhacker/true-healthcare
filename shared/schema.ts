import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const franchiseInquiries = pgTable("franchise_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  territory: text("territory").notNull(),
  investmentLevel: text("investment_level").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const territories = pgTable("territories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  state: text("state").notNull(),
  district: text("district").notNull(),
  tehsil: text("tehsil").notNull(),
  panchayat: text("panchayat").notNull(),
  isAvailable: text("is_available").notNull().default("true"),
  slotsRemaining: text("slots_remaining").notNull().default("3"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertFranchiseInquirySchema = createInsertSchema(franchiseInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertTerritorySchema = createInsertSchema(territories).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type FranchiseInquiry = typeof franchiseInquiries.$inferSelect;
export type InsertFranchiseInquiry = z.infer<typeof insertFranchiseInquirySchema>;
export type Territory = typeof territories.$inferSelect;
export type InsertTerritory = z.infer<typeof insertTerritorySchema>;
