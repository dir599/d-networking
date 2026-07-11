import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createCommentValidationSchema } from "../validators/commentValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllComments = asyncHandler(async (req, res) => {
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
      _count: {
        select: {
          commentLikes: true,
        },
      },
    },
  });
  if (!comments) throw new Error("No comments found");

  res.status(200).json({
    message: "Comments fetched",
    data: comments,
  });
});

const getCommentById = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);

  const comment = await prisma.comment.findUnique({
    where: {
      id,
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
      _count: {
        select: {
          commentLikes: true,
        },
      },
    },
  });
  if (!comment) throw new Error("No comment with that id found");

  res.status(200).json({
    message: "Comment fetched",
    data: comment,
  });
});
const createComment = asyncHandler(async (req, res) => {
  const { content, authorId, postId } = createCommentValidationSchema.parse(
    req.body,
  );

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
      _count: {
        select: {
          commentLikes: true,
        },
      },
    },
  });
  res.status(201).json({
    success: true,
    message: "Comment created successfully",
    data: comment,
  });
});
const updateComment = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);
  const { content } = createCommentValidationSchema.parse(req.body);

  const comment = await prisma.comment.update({
    where: {
      id,
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
      _count: {
        select: {
          commentLikes: true,
        },
      },
    },
  });
  if (!comment) throw new Error("No comment with that id found");

  res.status(201).json({
    success: true,
    message: "User updated successfully",
    data: comment,
  });
});
const deleteComment = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params);

  const comment = await prisma.comment.delete({
    where: {
      id,
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
      _count: {
        select: {
          commentLikes: true,
        },
      },
    },
  });
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
