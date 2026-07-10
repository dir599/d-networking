import prisma from "../db/prisma.js";
import { createPostValidationSchema } from "../validators/postValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllPosts = async (req, res) => {
  try {
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
            likes: true,
            comments: true,
          },
        },
      },
    });
    if (!posts)
      return res.status(404).json({
        message: "No posts found",
      });
    res.status(200).json({
      message: "Posts fetched",
      data: posts,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch posts",
      error: e,
    });
  }
};

const getPostById = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation errors
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
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
            likes: true,
            comments: true,
          },
        },
      },
    });
    if (!post)
      return res.status(404).json({
        message: "No post with that id found",
      });
    res.status(200).json({
      message: "Post fetched",
      data: post,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch post",
      error: e,
    });
  }
};
const createPost = async (req, res) => {
  const result = createPostValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  const { content, image, authorId } = req.body;
  try {
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
  } catch (e) {
    console.log(e);

    return res.status(400).json({
      success: false,
      message: "Failed to create post",
      error: e.message,
    });
  }
};
const updatePost = async (req, res) => {
  const idResult = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  const result = createPostValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  if (!result) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }
  // todo: might need some changes in the future. This is just a placeholder
  const { content, image } = req.body;
  try {
    const post = await prisma.post.update({
      where: {
        id: Number(id),
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
            likes: true,
            comments: true,
          },
        },
      },
    });
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      data: post,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to update post",
      error: e,
    });
  }
};
const deletePost = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  // todo: might need some changes in the future. This is just a placeholder
  try {
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
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
            likes: true,
            comments: true,
          },
        },
      },
    });
    res.status(201).json({
      success: true,
      message: "Post deleted successfully",
      data: post,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to delete post",
      error: e,
    });
  }
};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
