import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import serviceRoutes from "./routes/serviceRoutes";
import stylistRoutes from "./routes/stylistRoutes";
import blogRoutes from "./routes/blogRoutes";
import reviewRoutes from "./routes/reviews.routes";
import userRoutes from "./routes/userRoutes";  // ✅ FIX

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});


app.use("/api/users", userRoutes);      // ✅ FIX — use app.use()
app.use("/api/services", serviceRoutes);
app.use("/api/stylists", stylistRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
