import { eq } from "drizzle-orm";
import { db } from "./db";
import { 
  users, 
  productInquiries, 
  franchiseInquiries,
  territories,
  type User, 
  type InsertUser,
  type ProductInquiry,
  type InsertProductInquiry,
  type FranchiseInquiry,
  type InsertFranchiseInquiry,
  type Territory,
  type InsertTerritory
} from "../shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(insertUser: InsertUser): Promise<User>;
  
  // Product inquiry methods
  createProductInquiry(inquiry: InsertProductInquiry): Promise<ProductInquiry>;
  getProductInquiries(): Promise<ProductInquiry[]>;
  
  // Franchise inquiry methods
  createFranchiseInquiry(inquiry: InsertFranchiseInquiry): Promise<FranchiseInquiry>;
  getFranchiseInquiries(): Promise<FranchiseInquiry[]>;
  
  // Territory methods
  getTerritories(): Promise<Territory[]>;
  getTerritoryById(id: string): Promise<Territory | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createProductInquiry(inquiry: InsertProductInquiry): Promise<ProductInquiry> {
    const [result] = await db
      .insert(productInquiries)
      .values(inquiry)
      .returning();
    return result;
  }

  async getProductInquiries(): Promise<ProductInquiry[]> {
    return await db
      .select()
      .from(productInquiries)
      .orderBy(productInquiries.createdAt);
  }

  async createFranchiseInquiry(inquiry: InsertFranchiseInquiry): Promise<FranchiseInquiry> {
    const [result] = await db
      .insert(franchiseInquiries)
      .values(inquiry)
      .returning();
    return result;
  }

  async getFranchiseInquiries(): Promise<FranchiseInquiry[]> {
    return await db
      .select()
      .from(franchiseInquiries)
      .orderBy(franchiseInquiries.createdAt);
  }

  async getTerritories(): Promise<Territory[]> {
    return await db.select().from(territories);
  }

  async getTerritoryById(id: string): Promise<Territory | undefined> {
    const [territory] = await db.select().from(territories).where(eq(territories.id, id));
    return territory || undefined;
  }
}

export const storage = new DatabaseStorage();