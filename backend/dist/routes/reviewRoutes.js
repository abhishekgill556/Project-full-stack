"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviewController_1 = require("../controllers/reviewController");
const router = (0, express_1.Router)();
router.get("/", reviewController_1.reviewController.getAll);
router.post("/", reviewController_1.reviewController.create);
router.delete("/:id", reviewController_1.reviewController.remove);
exports.default = router;
