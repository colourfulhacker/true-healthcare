import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFranchiseInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get territory options
  app.get("/api/territories/:level", async (req, res) => {
    try {
      const { level } = req.params;
      const { parent } = req.query;
      const options = await storage.getTerritoryOptions(level, parent as string);
      res.json(options);
    } catch (error) {
      console.error("Error fetching territory options:", error);
      res.status(500).json({ error: "Failed to fetch territory options" });
    }
  });

  // Check territory availability
  app.post("/api/territories/check", async (req, res) => {
    try {
      const { state, district, tehsil, panchayat } = req.body;
      const territory = await storage.checkTerritoryAvailability(state, district, tehsil, panchayat);
      
      if (!territory) {
        res.json({ 
          available: false, 
          message: "Territory information not found. Please contact us for availability." 
        });
        return;
      }

      if (territory.isAvailable === "true") {
        res.json({
          available: true,
          slotsRemaining: parseInt(territory.slotsRemaining),
          message: `Congratulations! Only ${territory.slotsRemaining} slots left in this area! Apply now to claim yours.`
        });
      } else {
        res.json({
          available: false,
          message: "We're sorry, this area is currently fully allocated. Please check a nearby location or contact us for future openings."
        });
      }
    } catch (error) {
      console.error("Error checking territory availability:", error);
      res.status(500).json({ error: "Failed to check territory availability" });
    }
  });

  // Create franchise inquiry
  app.post("/api/franchise-inquiries", async (req, res) => {
    try {
      const validatedData = insertFranchiseInquirySchema.parse(req.body);
      const inquiry = await storage.createFranchiseInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Validation error", details: error.errors });
      } else {
        console.error("Error creating franchise inquiry:", error);
        res.status(500).json({ error: "Failed to create franchise inquiry" });
      }
    }
  });

  // Get all franchise inquiries
  app.get("/api/franchise-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getFranchiseInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching franchise inquiries:", error);
      res.status(500).json({ error: "Failed to fetch franchise inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
