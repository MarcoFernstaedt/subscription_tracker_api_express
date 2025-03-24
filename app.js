import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import xssClean from "xss-clean";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import rateLimiter from "./middlewares/rateLimiter.middleware.js";
import { PORT } from "./config/env.js";

const app = express();

// Security & Middleware
app.use(helmet());
app.use(hpp());
app.use(xssClean());
app.use(cors());
app.use(rateLimiter);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1", routes);

// Error Handler
app.use(errorMiddleware);

// Server Start
const startServer = async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

export default app;
