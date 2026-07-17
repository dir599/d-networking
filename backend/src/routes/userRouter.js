import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../handlers/userHandler.js";
import { toggleFollow } from "../handlers/followHandler.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

// /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// follow
router.post("/follow/:id", toggleFollow);

export default router;
