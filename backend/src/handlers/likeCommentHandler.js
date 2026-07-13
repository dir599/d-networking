import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { likeCommentValidationSchema } from "../validators/likeValidator.js";
import { idValidator } from "../validators/validator.js";

export const toggleLikeInComment = asyncHandler(async (req, res) => {
  const { userId } = likeCommentValidationSchema.parse(req.body);
  const id = idValidator.parse(req.params.id);
  const existingLike = await prisma.commentLike.findUnique({
    where: {
      userId_commentId: {
        userId,
        commentId: id,
      },
    },
  });

  // if liked already, remove the like
  if (existingLike) {
    await prisma.commentLike.delete({
      where: {
        userId_commentId: {
          userId,
          commentId: id,
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
      commentId: id,
    },
  });
  res.status(200).json({
    success: true,
    liked: true,
  });
});
