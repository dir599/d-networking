import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  updateComment,
} from "../handlers/commentHandler.js";
import { toggleLikeInComment } from "../handlers/likeCommentHandler.js";

const router = Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

// like
router.post("/:id/like", toggleLikeInComment);

export default router;
