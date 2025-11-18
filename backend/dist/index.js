"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const stylistRoutes_1 = __importDefault(require("./routes/stylistRoutes"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
const app = (0, express_1.default)();
const FRONTEND_URL = process.env.FRONTEND_URL;
const allowLocalDev = (origin) => {
    if (!origin)
        return true; // allow same-origin/non-browser
    if (FRONTEND_URL && origin === FRONTEND_URL)
        return true;
    // allow any localhost/127.0.0.1 port (Vite often picks 5173-5179)
    const localRegex = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/i;
    return localRegex.test(origin);
};
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (allowLocalDev(origin))
            return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "Backend server is running!" });
});
app.use("/api/blogs", blogRoutes_1.default);
app.use("/api/reviews", reviewRoutes_1.default);
app.use("/api/services", serviceRoutes_1.default);
app.use("/api/stylists", stylistRoutes_1.default);
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
