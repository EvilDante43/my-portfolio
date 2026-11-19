import express from "express";

import {
  sendMessage,
} from "../controllers/contactController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

import Contact from "../models/Contact.js";

const router = express.Router();


// Send Contact Message
router.post("/", sendMessage);


// Get All Messages (Admin Only)
router.get(
  "/all",
  protect,
  adminOnly,
  async (req, res) => {
    try {

      const messages = await Contact.find().sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        count: messages.length,
        messages,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }
);


// Delete Message (Admin Only)
router.delete(
  "/:id",
  protect,
  adminOnly,
  async (req, res) => {
    try {

      const message = await Contact.findById(
        req.params.id
      );

      if (!message) {
        return res.status(404).json({
          success: false,
          message: "Message not found",
        });
      }

      await message.deleteOne();

      res.status(200).json({
        success: true,
        message: "Message deleted successfully",
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }
);

export default router;