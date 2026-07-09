import { z } from "zod";

const userIdValidator = z.coerce.number().int().nonnegative();
const postIdValidator = z.coerce.number().int().nonnegative();

export const createLikeValidationSchema = z.object({
  authorId: userIdValidator,
  postId: postIdValidator,
});
