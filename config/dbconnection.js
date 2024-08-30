// <============================ file to show the database connection ===========================>

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// creating the connection for the database
export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("mongoose connected");
  } catch (error) {
    console.error("error", error);
  }
};
