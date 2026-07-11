import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { likeCommentValidationSchema } from "../validators/likeValidator.js";
import { idValidator } from "../validators/validator.js";

export const toggleLikeInComment = asyncHandler(async (req, res) => {
  const { userId, commentId } = likeCommentValidationSchema.parse(req.body);
  const existingLike = await prisma.commentLike.findUnique({
    where: {
      userId_commentId: {
        userId,
        commentId,
      },
    },
  });

  // if liked already, remove the like
  if (existingLike) {
    await prisma.commentLike.delete({
      where: {
        userId_commentId: {
          userId,
          commentId,
        },
      },
    });
    return res.status(200).json({
      success: true,
      liked: false,
    });
  }

  // if not liked, add like
  await prisma.commentLike.create({
    data: {
      userId,
      commentId,
    },
  });
  res.status(200).json({
    success: true,
    liked: true,
  });
});
