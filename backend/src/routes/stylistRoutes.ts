import { Router } from "express";
import stylistController from "../controllers/stylistController";

const router = Router();

router.get("/", stylistController.getAll);
router.put("/", stylistController.update);
router.delete("/:category", stylistController.remove);

export default router;
