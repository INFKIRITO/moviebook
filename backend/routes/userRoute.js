import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
} from "../controller/authcontroller.js";
import { isAdmin, requireSignIn } from "../middleware/authmiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//update profile
router.put("/profile", requireSignIn, updateProfileController);

router.put(
  requireSignIn,
  isAdmin
);


export default router;