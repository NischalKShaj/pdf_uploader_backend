//  <============================== file for database connection =========================>

// importing the required modules
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// connecting the mongodb
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB || "");
    console.log("Database connected");
  } catch (error) {
    console.error("error", error);
  }
};
