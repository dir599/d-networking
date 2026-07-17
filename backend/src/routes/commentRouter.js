import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  updateComment,
} from "../handlers/commentHandler.js";
import { toggleLikeInComment } from "../handlers/likeCommentHandler.js";
import { authorize } from "../middleware/role.middleware.js";

const router = Router();

// /comments
router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

// like
router.post("/like/:id", toggleLikeInComment);

export default router;
