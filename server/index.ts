import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

const app = express();

// Add middleware for parsing JSON
app.use(express.json());

// Import storage
import { storage } from "./storage";
import { insertProductInquirySchema } from "../shared/schema";

// API Routes
app.post('/api/product-inquiries', async (req, res) => {
  try {
    // Validate the request body using the schema
    const validatedData = insertProductInquirySchema.parse(req.body);
    
    // Store in database
    const inquiry = await storage.createProductInquiry(validatedData);
    
    // Log the inquiry for the business owner to see
    console.log('New Product Inquiry Received:', {
      id: inquiry.id,
      productName: inquiry.productName,
      customerName: inquiry.fullName,
      phone: inquiry.phone,
      email: inquiry.email,
      city: inquiry.city,
      state: inquiry.state,
      quantity: inquiry.quantity,
      timestamp: inquiry.createdAt
    });
    
    res.status(201).json({ 
      success: true, 
      message: 'Product inquiry submitted successfully',
      inquiryId: inquiry.id 
    });
  } catch (error) {
    console.error('Error processing product inquiry:', error);
    if (error instanceof Error && error.name === 'ZodError') {
      res.status(400).json({ 
        success: false, 
        message: 'Invalid inquiry data provided.' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to submit inquiry. Please try again.' 
      });
    }
  }
});

// API route to get product inquiries (for admin access)
app.get('/api/product-inquiries', async (req, res) => {
  try {
    const inquiries = await storage.getProductInquiries();
    res.json({ 
      success: true, 
      inquiries: inquiries.reverse() // Most recent first
    });
  } catch (error) {
    console.error('Error fetching product inquiries:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch inquiries.' 
    });
  }
});

async function setupVite() {
  // Create Vite server in middleware mode for development
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      allowedHosts: true,
      hmr: false
    },
    appType: "spa", 
    root: path.resolve(process.cwd(), "client"),
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "client", "src"),
        "@assets": path.resolve(process.cwd(), "attached_assets"),
      },
    },
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);
  return vite;
}

function serveStatic() {
  // In production, serve the built frontend
  const distPath = path.resolve(process.cwd(), "dist/public");
  app.use(express.static(distPath));
  
  // Handle client-side routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Setup and start server
(async () => {
  // Setup Vite for development or serve static files for production
  if (process.env.NODE_ENV === "development") {
    await setupVite();
  } else {
    serveStatic();
  }

  // ALWAYS serve the app on port 5000
  const port = parseInt(process.env.PORT || '5000', 10);
  app.listen(port, "0.0.0.0", () => {
    console.log(`Frontend server running on port ${port}`);
  });
})();