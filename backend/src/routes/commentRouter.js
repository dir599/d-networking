import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  updateComment,
} from "../handlers/commentHandler.js";

const router = Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
