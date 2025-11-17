import express from "express";
import cors from "cors";

import serviceRoutes from "./routes/serviceRoutes";
import stylistRoutes from "./routes/stylistRoutes";
import blogRoutes from "./routes/blogRoutes";

const app = express();

// Simple CORS allowing only your Vite frontend
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

// Base endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

// API routes
app.use("/api/services", serviceRoutes);
app.use("/api/stylists", stylistRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
