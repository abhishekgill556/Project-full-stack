import { Router } from "express";
import reviewsRoutes from "./reviews.routes.js";

const router = Router();

router.use("/reviews", reviewsRoutes);

export default router;
