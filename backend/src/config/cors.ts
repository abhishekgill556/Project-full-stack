import { CorsOptions } from "cors";

// Allowed frontend origin pulled from .env
// Example: FRONTEND_URL=http://localhost:5173
const allowedOrigins = [process.env.FRONTEND_URL];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // Allow requests from:
    // 1. Allowed frontend URL
    // 2. No origin (Postman, ThunderClient, curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },

  // Allow headers frontend will send
  allowedHeaders: ["Content-Type", "Authorization"],

  // Allow REST methods
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

  // Needed if you use Clerk/Auth/Cookies
  credentials: true,
};

export default corsOptions;
