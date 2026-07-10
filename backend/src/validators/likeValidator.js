import { z } from "zod";

const userIdValidator = z.coerce.number().int().nonnegative();
const postIdValidator = z.coerce.number().int().nonnegative();

export const LikeValidationSchema = z.object({
  userId: userIdValidator,
  postId: postIdValidator,
});
