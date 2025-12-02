import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import routes from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());


app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});


app.get("/protected", (req, res) => {
  res.json({
    message: "You can access this because you are logged in",
    auth: req.auth
  });
});

app.use("/api", routes);

export default app;
