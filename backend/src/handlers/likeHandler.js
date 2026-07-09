import prisma from "../db/prisma.js";
import { createLikeValidationSchema } from "../validators/likeValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllLikes = async (req, res) => {
  try {
    const likes = await prisma.like.findMany({
      select: {
        user: {
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
    if (!likes)
      return res.status(404).json({
        message: "No likes found",
      });
    res.status(200).json({
      message: "Likes fetched",
      data: likes,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch likes",
      error: e,
    });
  }
};

const getLikeById = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation errors
  const { id } = req.params;
  try {
    const like = await prisma.like.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        user: {
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
    if (!like)
      return res.status(404).json({
        message: "No like with that id found",
      });
    res.status(200).json({
      message: "Like fetched",
      data: like,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch like",
      error: e,
    });
  }
};
const createLike = async (req, res) => {
  const result = createLikeValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  const { userId, postId } = req.body;
  try {
    const like = await prisma.like.create({
      data: {
        user: { connect: { id: userId } },
        post: {
          connect: {
            id: postId,
          },
        },
      },
      select: {
        user: {
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
      message: "Like created successfully",
      data: like,
    });
  } catch (e) {
    console.log(e);

    return res.status(400).json({
      success: false,
      message: "Failed to create like",
      error: e.message,
    });
  }
};

const deleteLike = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  // todo: might need some changes in the future. This is just a placeholder
  try {
    const like = await prisma.like.delete({
      where: {
        id: Number(id),
      },
      select: {
        user: {
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
      message: "Like deleted successfully",
      data: like,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to delete like",
      error: e,
    });
  }
};

export { getAllLikes, getLikeById, createLike, deleteLike };
