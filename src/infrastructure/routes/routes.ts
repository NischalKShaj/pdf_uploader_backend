// <==================== routes for the application ===================================>

// importing the required modules
import express from "express";
import UserController from "../../adapter/controller/userController";

const router = express.Router();

// creating an instance for the controllers
const userController = new UserController();

// defining the routes
router.get("/", userController.getHome.bind(userController));

// exporting the routes
export default router;
