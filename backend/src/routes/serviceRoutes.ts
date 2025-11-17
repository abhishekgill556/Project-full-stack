import { Router } from "express";
import { serviceController } from "../controllers/serviceController";
import { validateService } from "../middlewares/validateService";

const router = Router();

router.get("/", serviceController.getAll);
router.get("/:id", serviceController.getById);
router.post("/", validateService, serviceController.create);
router.put("/:id", validateService, serviceController.update);
router.delete("/:id", serviceController.remove);

export default router;
