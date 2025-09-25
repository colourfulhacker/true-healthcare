import { sql } from "drizzle-orm";
import { pgTable, varchar, text, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Franchise inquiries table
export const franchiseInquiries = pgTable("franchise_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 255 }).notNull(),
  territory: varchar("territory", { length: 255 }).notNull(),
  investmentLevel: varchar("investment_level", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Product inquiries table for direct customer orders
export const productInquiries = pgTable("product_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 255 }).notNull(),
  address: text("address").notNull(),
  productName: varchar("product_name", { length: 255 }).notNull(),
  quantity: varchar("quantity", { length: 100 }).notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Territories table
export const territories = pgTable("territories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  state: varchar("state", { length: 255 }).notNull(),
  district: varchar("district", { length: 255 }).notNull(),
  tehsil: varchar("tehsil", { length: 255 }).notNull(),
  panchayat: varchar("panchayat", { length: 255 }).notNull(),
  isAvailable: varchar("is_available", { length: 10 }).notNull().default("true"),
  slotsRemaining: varchar("slots_remaining", { length: 10 }).notNull().default("0"),
});

// Create insert schemas using drizzle-zod
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertFranchiseInquirySchema = createInsertSchema(franchiseInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertProductInquirySchema = createInsertSchema(productInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertTerritorySchema = createInsertSchema(territories).omit({
  id: true,
});

// Infer types from tables
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type FranchiseInquiry = typeof franchiseInquiries.$inferSelect;
export type InsertFranchiseInquiry = z.infer<typeof insertFranchiseInquirySchema>;

export type ProductInquiry = typeof productInquiries.$inferSelect;
export type InsertProductInquiry = z.infer<typeof insertProductInquirySchema>;

export type Territory = typeof territories.$inferSelect;
export type InsertTerritory = z.infer<typeof insertTerritorySchema>;

// Legacy schemas for backward compatibility with client
export const territorySchema = z.object({
  id: z.string(),
  state: z.string(),
  district: z.string(),
  tehsil: z.string(),
  panchayat: z.string(),
  isAvailable: z.string(),
  slotsRemaining: z.string(),
});

export const franchiseInquirySchema = insertFranchiseInquirySchema.extend({
  id: z.string(),
  createdAt: z.date(),
});

export const productInquirySchema = insertProductInquirySchema.extend({
  id: z.string(),
  createdAt: z.date(),
});

export const userSchema = insertUserSchema.extend({
  id: z.string(),
});