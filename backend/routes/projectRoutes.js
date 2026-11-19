import express from "express";

import {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// Get All Projects
router.get("/", getProjects);


// Get Single Project
router.get("/:id", getSingleProject);


// Create Project (Admin Only)
router.post(
  "/",
  protect,
  adminOnly,
  createProject
);


// Update Project (Admin Only)
router.put(
  "/:id",
  protect,
  adminOnly,
  updateProject
);


// Delete Project (Admin Only)
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProject
);

export default router;