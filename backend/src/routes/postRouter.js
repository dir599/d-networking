import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../handlers/postHandler.js";
import { toggleLikeInPost } from "../handlers/likePostHandler.js";

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

// like
router.post("/:id/like", toggleLikeInPost);

export default router;
