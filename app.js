import express from "express";
import routes from "./routes/index.js";
import { PORT } from "./config/env.js";

const app = express();

app.use("/api/v1", routes);

app.listen(PORT);

export default app;
