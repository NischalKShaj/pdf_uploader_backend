//  <========================== file for defining the routes ====================>

// importing the required modules
import express from "express";
import { userController } from "../controller/userController.js";
import { authenticateUserJwt } from "../middleware/userAuth.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

// defining the routes

// for getting the initial rendering
router.get("/", authenticateUserJwt, userController.getHome);

// router for signup
router.post("/signup", userController.userSignup);

// router for login
router.post("/login", userController.userLogin);

// router for saving the uploaded pdf
router.patch(
  "/uploads/:id",
  authenticateUserJwt,
  upload.single("pdf"),
  userController.uploadPDF
);

// exporting the router
export default router;
