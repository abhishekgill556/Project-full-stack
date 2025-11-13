import express from "express";
import cors from "cors";
import serviceRoutes from "./routes/serviceRoutes";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

app.use("/api/services", serviceRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
