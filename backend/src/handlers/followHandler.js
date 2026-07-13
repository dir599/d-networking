import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { followerValidationSchema } from "../validators/followValidator.js";
import { idValidator } from "../validators/validator.js";

export const toggleFollow = asyncHandler(async (req, res) => {
  const { followerId } = followerValidationSchema.parse(req.body);
  const id = idValidator.parse(req.params.id);
  const existingFollow = await prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId: id,
      },
    },
  });

  // if liked already, remove the like
  if (existingFollow) {
    await prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId: id,
        },
      },
    });
    return res.status(200).json({
      success: true,
      liked: false,
    });
  }

  // if not followed, add follow
  await prisma.follow.create({
    data: {
      followerId,
      followingId: id,
    },
  });
  res.status(200).json({
    success: true,
    liked: true,
  });
});
