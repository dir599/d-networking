import { z } from "zod";

const userIdValidator = z.coerce.number().int().nonnegative();
const postIdValidator = z.coerce.number().int().nonnegative();
const commentIdValidator = z.coerce.number().int().nonnegative();

export const likeValidationSchema = z.object({
  userId: userIdValidator,
  postId: postIdValidator,
});

export const likeCommentValidationSchema = z.object({
  userId: userIdValidator,
  commentId: commentIdValidator,
});
