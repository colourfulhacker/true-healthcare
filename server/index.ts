import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

const app = express();

async function setupVite() {
  // Create Vite server in middleware mode for development
  const vite = await createViteServer({
    server: { middlewareMode: true },
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