import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routing
//REGISTER || METHOD POST

router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test ||GET
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
