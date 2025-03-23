import express from "express";
import routes from "./routes/index.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from ".//middlewares/error.middleware.js";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Listening to port: ${PORT}`);

  await connectToDatabase();
});

export default app;
