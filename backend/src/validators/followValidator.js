import { z } from "zod";

const followerIdValidator = z.coerce.number().int().nonnegative();
const followingIdValidator = z.coerce.number().int().nonnegative();

export const followerValidationSchema = z.object({
  followerId: followerIdValidator,
});

export const followingValidationSchema = z.object({
  followingId: followingIdValidator,
});
