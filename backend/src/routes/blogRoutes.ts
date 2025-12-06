import { Router } from "express";
import { BlogController } from "../controllers/blogController";

const router = Router();
const controller = new BlogController();

router.get("/", (req, res) => controller.getAll(req, res));

router.get("/my", (req, res) => controller.myBlogs(req, res));

router.get("/:id", (req, res) => controller.getById(req.params.id, res));

router.post("/", (req, res) => controller.create(req, res));

router.put("/:id", (req, res) => controller.update(req.params.id, req, res));

router.delete("/:id", (req, res) => controller.delete(req.params.id, res));

export default router;
