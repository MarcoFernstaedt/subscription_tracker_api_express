import express from "express";
import routes from "./routes/index.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from ".//middlewares/error.middleware.js";
import rateLimiter from "./middlewares/rateLimiter.middleware.js";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import hpp from "hpp";
import xssClean from "xss-clean";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(rateLimiter);
app.use(helmet());
app.use(hpp());
app.use(xssClean());

app.use("/api/v1", routes);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Listening to port: ${PORT}`);

  await connectToDatabase();
});

export default app;
