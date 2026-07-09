import prisma from "../db/prisma.js";
import { createCommentValidationSchema } from "../validators/commentValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      select: {
        id: true,
        content: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            bio: true,
            role: true,
          },
        },
        post: true,
      },
    });
    if (!comments)
      return res.status(404).json({
        message: "No comments found",
      });
    res.status(200).json({
      message: "Comments fetched",
      data: comments,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch comments",
      error: e,
    });
  }
};

const getCommentById = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation errors
  const { id } = req.params;
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        content: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            bio: true,
            role: true,
          },
        },
        post: true,
      },
    });
    if (!comment)
      return res.status(404).json({
        message: "No comment with that id found",
      });
    res.status(200).json({
      message: "Comment fetched",
      data: comment,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch comment",
      error: e,
    });
  }
};
const createComment = async (req, res) => {
  const result = createCommentValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  const { content, authorId, postId } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        author: { connect: { id: authorId } },
        post: {
          connect: {
            id: postId,
          },
        },
      },
      select: {
        id: true,
        content: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            bio: true,
            role: true,
          },
        },
        post: true,
      },
    });
    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: comment,
    });
  } catch (e) {
    console.log(e);

    return res.status(400).json({
      success: false,
      message: "Failed to create comment",
      error: e.message,
    });
  }
};
const updateComment = async (req, res) => {
  const idResult = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  const result = createCommentValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  if (!result) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }
  // todo: might need some changes in the future. This is just a placeholder
  const { content } = req.body;
  try {
    const comment = await prisma.comment.update({
      where: {
        id: Number(id),
      },
      data: {
        content,
      },
      select: {
        id: true,
        content: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            bio: true,
            role: true,
          },
        },
        post: true,
      },
    });
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      data: comment,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to update comment",
      error: e,
    });
  }
};
const deleteComment = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  // todo: might need some changes in the future. This is just a placeholder
  try {
    const comment = await prisma.comment.delete({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        content: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            bio: true,
            role: true,
          },
        },
        post: true,
      },
    });
    res.status(201).json({
      success: true,
      message: "Comment deleted successfully",
      data: comment,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to delete comment",
      error: e,
    });
  }
};

export {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
