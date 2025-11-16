"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stylistController_1 = __importDefault(require("../controllers/stylistController"));
const router = (0, express_1.Router)();
router.get("/", stylistController_1.default.getAll);
router.put("/", stylistController_1.default.update);
router.delete("/:service", stylistController_1.default.remove);
exports.default = router;
