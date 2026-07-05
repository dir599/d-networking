import z from "zod";

const nameValidator = z
  .string()
  .min(3, "Name must be at least 3 characters long")
  .max(100, "Name must not be more than a 100 characters");
const emailValidator = z.email("Invalid email");
const passwordValidator = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export const createUserValidationSchema = z.object({
  name: nameValidator,
  email: emailValidator,
  password: passwordValidator,
});
