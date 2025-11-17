"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const stylistRoutes_1 = __importDefault(require("./routes/stylistRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173"
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "Backend server is running!" });
});
app.use("/api/services", serviceRoutes_1.default);
app.use("/api/stylists", stylistRoutes_1.default);
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
