// <====================== file to show the controller for the application ==================>

// importing the required modules
import { userModel } from "../models/userModel.js";
import { generateToken } from "../middleware/generateToken.js";
import bcrypt from "bcryptjs";

// creating the userController for the project
export const userController = {
  // controller for getting the host
  getHome: async (req, res) => {
    try {
      const { email } = req.user;
      const userData = await userModel.findOne(
        { email: email },
        { username: 1, email: 1, uploaded_file: 1, new_file: 1 }
      );
      console.log("inside", userData);
      res.status(202).json({ data: userData });
    } catch (error) {
      console.error("error", error);
      res.status(404).json("error", error);
    }
  },

  // controller for signing up the user
  userSignup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const existingUser = await userModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new userModel({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).json("user signed successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // controller for user login
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email: email });

      // if invalid email
      if (!user) {
        return res.status(400).json("user not found");
      }
      const matchPassword = bcrypt.compare(password, user.password);

      // if invalid password
      if (!matchPassword) {
        return res.status(400).json("invalid password");
      }
      const token = generateToken(user.email);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(202)
        .json({ data: user, token: token });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // controller for uploading the pdf
  uploadPDF: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userModel.findById({ _id: id });
      if (!user) {
        return res.status(400).json("user not found");
      }

      const uploaded_file = req.file.filename;

      // appending the new file to the database of the user
      user.uploaded_file.push(uploaded_file);
      await user.save();
      res.status(202).json({ data: user });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
