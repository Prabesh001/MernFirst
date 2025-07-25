import mongoose from "mongoose";
import { adminSeeder } from "../seeders/adminSeeder.js";
import constant from "./constant.js";

const connectDb = async () => {
  try {
    await mongoose.connect(constant.MONGO_URI);
    console.log("db is connected successfully");

    adminSeeder();
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
