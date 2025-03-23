import express from "express";
import routes from "./routes/index.js";
import connectToDatabase from "./database/mongodb.js";
import { PORT } from "./config/env.js";

const app = express();

app.use("/api/v1", routes);

app.listen(PORT, async () => {
  console.log(`Listening to port: ${PORT}`);

  await connectToDatabase();
});

export default app;
