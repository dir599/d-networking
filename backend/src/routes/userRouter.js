import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../handlers/userHandler.js";
import { toggleFollow } from "../handlers/followHandler.js";

const router = Router();

// /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// follow
router.post("/follow/:id", toggleFollow);

export default router;
