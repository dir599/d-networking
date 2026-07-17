import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../handlers/userHandler.js";
import { toggleFollow } from "../handlers/followHandler.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = Router();

// /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", authorize("ADMIN"), deleteUser);

// follow
router.post("/follow/:id", toggleFollow);

export default router;
