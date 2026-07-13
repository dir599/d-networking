import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { likeValidationSchema } from "../validators/likeValidator.js";
import { idValidator } from "../validators/validator.js";

export const toggleLikeInPost = asyncHandler(async (req, res) => {
  const { userId } = likeValidationSchema.parse(req.body);
  const id = idValidator.parse(req.params.id);
  const existingLike = await prisma.postLike.findUnique({
    where: {
      userId_postId: {
        userId,
        postId: id,
      },
    },
  });

  // if liked already, remove the like
  if (existingLike) {
    await prisma.postLike.delete({
      where: {
        userId_postId: {
          userId,
          postId: id,
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
      postId: id,
    },
  });
  res.status(200).json({
    success: true,
    liked: true,
  });
});
