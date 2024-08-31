//  <========================== file for defining the routes ====================>

// importing the required modules
import express from "express";
import { userController } from "../controller/userController.js";

const router = express.Router();

// defining the routes

// for getting the initial rendering
router.get("/", userController.getHome);

// router for signup
router.post("/signup", userController.userSignup);

// router for login
router.post("/login", userController.userLogin);

// exporting the router
export default router;
