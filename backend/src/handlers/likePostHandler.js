import prisma from "../db/prisma.js";
import { LikeValidationSchema } from "../validators/likeValidator.js";
import { idValidator } from "../validators/validator.js";

export const toggleLikeInPost = async (req, res) => {
  const result = LikeValidationSchema.parse(req.body);
  //todo: handle zod error and error handling using try-catch or asyncHandler and errorHandler middleware
  const { userId, postId } = req.body;
  try {
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    // if liked already, remove the like
    if (existingLike) {
      await prisma.like.delete({
        where: {
          userId_postId: {
            userId,
            postId,
          },
        },
      });
      return res.status(200).json({
        success: true,
        liked: false,
      });
    }

    // if not liked, add like
    await prisma.like.create({
      data: {
        userId,
        postId,
      },
    });
    res.status(200).json({
      success: true,
      liked: true,
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "Something went wrong",
      error: e,
    });
  }
};
