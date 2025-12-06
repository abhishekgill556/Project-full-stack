import { CorsOptions } from "cors";

const allowedOrigins = [process.env.FRONTEND_URL];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },

  allowedHeaders: ["Content-Type", "Authorization"],

  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

  credentials: true,
};

export default corsOptions;
