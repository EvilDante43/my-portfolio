import jwt from "jsonwebtoken";

import User from "../models/User.js";


export const protect = async (req, res, next) => {
  try {

    let token;

    // Check token from cookies
    if (req.cookies.token) {
      token = req.cookies.token;
    }

    // If no token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find user
    req.user = await User.findById(decoded.id).select(
      "-password"
    );

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    next();

  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};


// Admin Middleware
export const adminOnly = async (req, res, next) => {
  try {

    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Access denied, admin only",
      });
    }

    next();

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};