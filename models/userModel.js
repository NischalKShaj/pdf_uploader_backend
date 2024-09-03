// <================= file for user models ==========================>

// importing the required modules
import { Schema, model } from "mongoose";

// defining the schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uploaded_file: [
    {
      type: String,
    },
  ],
  new_file: [
    {
      type: String,
    },
  ],
});

// creating the model and exporting
export const userModel = model("userCollection", userSchema);
