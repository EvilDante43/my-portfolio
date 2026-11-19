import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// Register Admin/User
router.post("/register", registerUser);


// Login User
router.post("/login", loginUser);


// Logout User
router.post("/logout", logoutUser);


// Get Current Logged In User
router.get(
  "/me",
  protect,
  adminOnly,
  async (req, res) => {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  }
);

export default router;