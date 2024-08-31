// <====================== file to generate the JWT token ====================>

// importing the required modules
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// creating the module for the token
export const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "4h" });
};
