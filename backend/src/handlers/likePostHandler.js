import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { likeValidationSchema } from "../validators/likeValidator.js";
import { idValidator } from "../validators/validator.js";

export const toggleLikeInPost = asyncHandler(async (req, res) => {
  const result = likeValidationSchema.parse(req.body);
  //todo: handle zod error and error handling using try-catch or asyncHandler and errorHandler middleware
  const { userId, postId } = req.body;
  const existingLike = await prisma.postLike.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  // if liked already, remove the like
  if (existingLike) {
    await prisma.postLike.delete({
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
  await prisma.postLike.create({
    data: {
      userId,
      postId,
    },
  });
  res.status(200).json({
    success: true,
    liked: true,
  });
  console.log(e);
  res.json({
    message: "Something went wrong",
    error: e.message,
  });
});
