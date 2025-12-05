import { Router } from "express";
import { serviceController } from "../controllers/serviceController";
import { requireAuth } from "@clerk/express";

const router = Router()
router.get("/", serviceController.getAll);
router.get("/:id", serviceController.getById);
router.post("/", serviceController.create);
router.put("/:id", serviceController.update);
router.delete("/:id", serviceController.remove);
router.post("/my-services", requireAuth(), serviceController.addMyService);
router.get("/my-services", requireAuth(), serviceController.getMyServices);

export default router;
