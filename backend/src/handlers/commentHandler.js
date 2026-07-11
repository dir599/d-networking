import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import {
  createCommentService,
  deleteCommentService,
  getAllCommentsService,
  getCommentByIdService,
  updateCommentService,
} from "../service/comment.service.js";
import { createCommentValidationSchema } from "../validators/commentValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllComments = asyncHandler(async (req, res) => {
  const comments = await getAllCommentsService();
  if (!comments) throw new Error("No comments found");

  res.status(200).json({
    message: "Comments fetched",
    data: comments,
  });
});

const getCommentById = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);

  const comment = await getCommentByIdService(id);
  if (!comment) throw new Error("No comment with that id found");

  res.status(200).json({
    message: "Comment fetched",
    data: comment,
  });
});
const createComment = asyncHandler(async (req, res) => {
  const body = createCommentValidationSchema.parse(req.body);

  const comment = await createCommentService(body);
  res.status(201).json({
    success: true,
    message: "Comment created successfully",
    data: comment,
  });
});
const updateComment = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);
  const body = createCommentValidationSchema.parse(req.body);

  const comment = await updateCommentService(id, body);
  if (!comment) throw new Error("No comment with that id found");

  res.status(201).json({
    success: true,
    message: "User updated successfully",
    data: comment,
  });
});
const deleteComment = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);

  const comment = await deleteCommentService(id);
  if (!comment) throw new Error("No comment with that id found");

  res.status(201).json({
    success: true,
    message: "Comment deleted successfully",
    data: comment,
  });
});

export {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
