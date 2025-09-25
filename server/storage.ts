import { type User, type InsertUser, type FranchiseInquiry, type InsertFranchiseInquiry, type Territory, type InsertTerritory } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createFranchiseInquiry(inquiry: InsertFranchiseInquiry): Promise<FranchiseInquiry>;
  getFranchiseInquiries(): Promise<FranchiseInquiry[]>;
  checkTerritoryAvailability(state: string, district: string, tehsil: string, panchayat: string): Promise<Territory | null>;
  getTerritoryOptions(level: string, parent?: string): Promise<string[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private franchiseInquiries: Map<string, FranchiseInquiry>;
  private territories: Territory[];

  constructor() {
    this.users = new Map();
    this.franchiseInquiries = new Map();
    this.territories = this.initializeTerritories();
  }

  private initializeTerritories(): Territory[] {
    return [
      {
        id: randomUUID(),
        state: "Rajasthan",
        district: "Jaipur",
        tehsil: "Pachkodiya",
        panchayat: "Village A",
        isAvailable: "true",
        slotsRemaining: "2"
      },
      {
        id: randomUUID(),
        state: "Rajasthan",
        district: "Jaipur",
        tehsil: "Phulera",
        panchayat: "Village B",
        isAvailable: "true",
        slotsRemaining: "3"
      },
      {
        id: randomUUID(),
        state: "Maharashtra",
        district: "Mumbai",
        tehsil: "Andheri",
        panchayat: "Ward 1",
        isAvailable: "false",
        slotsRemaining: "0"
      },
      {
        id: randomUUID(),
        state: "Gujarat",
        district: "Ahmedabad",
        tehsil: "Bopal",
        panchayat: "Area 1",
        isAvailable: "true",
        slotsRemaining: "1"
      }
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createFranchiseInquiry(insertInquiry: InsertFranchiseInquiry): Promise<FranchiseInquiry> {
    const id = randomUUID();
    const inquiry: FranchiseInquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date()
    };
    this.franchiseInquiries.set(id, inquiry);
    return inquiry;
  }

  async getFranchiseInquiries(): Promise<FranchiseInquiry[]> {
    return Array.from(this.franchiseInquiries.values());
  }

  async checkTerritoryAvailability(state: string, district: string, tehsil: string, panchayat: string): Promise<Territory | null> {
    return this.territories.find(t => 
      t.state === state && 
      t.district === district && 
      t.tehsil === tehsil && 
      t.panchayat === panchayat
    ) || null;
  }

  async getTerritoryOptions(level: string, parent?: string): Promise<string[]> {
    switch (level) {
      case "states":
        return Array.from(new Set(this.territories.map(t => t.state)));
      case "districts":
        return Array.from(new Set(this.territories.filter(t => t.state === parent).map(t => t.district)));
      case "tehsils":
        const [state, district] = parent?.split(",") || [];
        return Array.from(new Set(this.territories.filter(t => t.state === state && t.district === district).map(t => t.tehsil)));
      case "panchayats":
        const [s, d, t] = parent?.split(",") || [];
        return Array.from(new Set(this.territories.filter(territory => territory.state === s && territory.district === d && territory.tehsil === t).map(territory => territory.panchayat)));
      default:
        return [];
    }
  }
}

export const storage = new MemStorage();
