import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createUserValidationSchema } from "../validators/userValidator.js";
import { idValidator } from "../validators/validator.js";
import bcrypt from "bcrypt";

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
    },
  });
  if (!users) throw new Error("No users found");

  res.status(200).json({
    message: "Users fetched",
    data: users,
  });
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params.id);

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
    },
  });
  if (!user) throw new Error("No user with that id found");

  res.status(200).json({
    message: "User fetched",
    data: user,
  });
});
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = createUserValidationSchema.parse(
    req.body,
  );
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
    },
  });
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});
const updateUser = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params.id);
  const { username, email, role } = createUserValidationSchema.parse(req.body);

  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      username,
      email,
      role,
    },
    select: {
      username: true,
      email: true,
      role: true,
    },
  });
  if (!user) throw new Error("No user with that id found");

  res.status(201).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = idValidator.parse(req.params.id);

  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
    select: {
      username: true,
      email: true,
      role: true,
    },
  });
  if (!user) throw new Error("No user with that id found");

  res.status(201).json({
    success: true,
    message: "User deleted successfully",
    data: user,
  });
});

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
