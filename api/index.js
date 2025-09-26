const express = require("express");
const path = require("path");

const app = express();

// Add middleware for parsing JSON
app.use(express.json());

// API Routes
app.post('/api/product-inquiries', async (req, res) => {
  try {
    // For now, just log the data and return success
    console.log('Product Inquiry Received:', req.body);
    
    res.status(201).json({ 
      success: true, 
      message: 'Product inquiry submitted successfully',
      inquiryId: Date.now().toString()
    });
  } catch (error) {
    console.error('Error processing product inquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit inquiry. Please try again.' 
    });
  }
});

// API route to get product inquiries (for admin access)
app.get('/api/product-inquiries', async (req, res) => {
  try {
    res.json({ 
      success: true, 
      inquiries: [] // Empty for now
    });
  } catch (error) {
    console.error('Error fetching product inquiries:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch inquiries.' 
    });
  }
});

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Serve static files from the built frontend
const distPath = path.resolve(__dirname, "../dist/public");
app.use(express.static(distPath));

// Handle client-side routing - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Check if the request is for a static file (has file extension)
  if (req.path.match(/\.[a-zA-Z0-9]+$/)) {
    // It's a static file request, let express.static handle it
    return;
  }
  // It's a route request, serve index.html
  try {
    // Try to serve from public first, then from dist
    const publicIndex = path.join(__dirname, "../public/index.html");
    const distIndex = path.join(distPath, "index.html");
    
    if (require('fs').existsSync(publicIndex)) {
      res.sendFile(publicIndex);
    } else if (require('fs').existsSync(distIndex)) {
      res.sendFile(distIndex);
    } else {
      res.status(404).send('Frontend not found. Please check if the build completed successfully.');
    }
  } catch (error) {
    console.error('Error serving index.html:', error);
    res.status(404).send('Frontend not found. Please check if the build completed successfully.');
  }
});

module.exports = app;
