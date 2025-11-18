import { Router } from "express";
import reviewsRoutes from "./reviews.routes";

const router = Router();

router.use("/reviews", reviewsRoutes);

export default router;
