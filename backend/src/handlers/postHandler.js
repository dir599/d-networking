import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createPostValidationSchema } from "../validators/postValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
    },
  });
  if (!posts) throw new Error("No posts found");

  res.status(200).json({
    message: "Posts fetched",
    data: posts,
  });
});

const getPostById = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params.id);

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
    },
  });
  if (!post) throw new Error("No post with that id found");

  res.status(200).json({
    message: "Post fetched",
    data: post,
  });
});
const createPost = asyncHandler(async (req, res) => {
  const { content, image, authorId } = createPostValidationSchema.parse(
    req.body,
  );

  const post = await prisma.post.create({
    data: {
      content,
      image,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
    select: {
      id: true,
      content: true,
      image: true,
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
    },
  });
  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: post,
  });
});
const updatePost = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params.id);
  const { content, image } = createPostValidationSchema.parse(req.body);

  const post = await prisma.post.update({
    where: {
      id,
    },
    data: {
      content,
      image,
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
    },
  });
  if (!post) throw new Error("No post with that id found");
  
  res.status(201).json({
    success: true,
    message: "User updated successfully",
    data: post,
  });
});
const deletePost = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params.id);
  const post = await prisma.post.delete({
    where: {
      id,
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
    },
  });
  if (!post) throw new Error("No post with that id found");

  res.status(201).json({
    success: true,
    message: "Post deleted successfully",
    data: post,
  });
});

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
