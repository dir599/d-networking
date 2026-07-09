import { z } from "zod";

const contentValidator = z
  .string()
  .max(100, "Only upto 100 characters allowed");
const authorIdValidator = z.coerce.number().int().nonnegative();

export const createPostValidationSchema = z.object({
  content: contentValidator,
  authorId: authorIdValidator,
});
