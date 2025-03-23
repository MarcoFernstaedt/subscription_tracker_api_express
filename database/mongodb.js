import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI enviorment variables in .env.<develpment/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connect to database ${NODE_ENV} mode`);
  } catch (err) {
    console.error(err);
    process.exit("code: 1");
  }
};

export default connectToDatabase;
