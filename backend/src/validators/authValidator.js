import z from "zod";

const nameValidator = z
  .string()
  .min(3, "username must be at least 3 characters long")
  .max(100, "username must not be more than a 100 characters");
const emailValidator = z.email("Invalid email");
const passwordValidator = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export const registerUserValidator = z.object({
  username: nameValidator,
  email: emailValidator,
  password: passwordValidator,
});
export const loginUserValidator = z.object({
  email: emailValidator,
  password: passwordValidator,
});
