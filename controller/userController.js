// <====================== file to show the controller for the application ==================>

// importing the required modules
import { userModel } from "../models/userModel.js";

// creating the userController for the project
export const userController = {
  getHome: async (req, res) => {
    try {
      res.status(200).json("home page");
    } catch (error) {
      res.status(404).json("error");
    }
  },
};
