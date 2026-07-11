import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import {
  createPostService,
  deletePostService,
  getAllPostsService,
  getPostByIdService,
  updatePostService,
} from "../service/post.service.js";
import { createPostValidationSchema } from "../validators/postValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await getAllPostsService();
  if (!posts) throw new Error("No posts found");

  res.status(200).json({
    message: "Posts fetched",
    data: posts,
  });
});

const getPostById = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);

  const post = await getPostByIdService(id);
  if (!post) throw new Error("No post with that id found");

  res.status(200).json({
    message: "Post fetched",
    data: post,
  });
});
const createPost = asyncHandler(async (req, res) => {
  const body = createPostValidationSchema.parse(
    req.body,
  );

  const post = await createPostService(body)
  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: post,
  });
});
const updatePost = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);
  const body = createPostValidationSchema.parse(req.body);

  const post = await updatePostService(id, body)
  if (!post) throw new Error("No post with that id found");

  res.status(201).json({
    success: true,
    message: "User updated successfully",
    data: post,
  });
});
const deletePost = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);
  const post = await deletePostService(id)
  if (!post) throw new Error("No post with that id found");

  res.status(201).json({
    success: true,
    message: "Post deleted successfully",
    data: post,
  });
});

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
