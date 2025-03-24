import { config } from "dotenv";
import validateEnv from "./validateEnv.js";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

validateEnv();

export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } =
  process.env;
