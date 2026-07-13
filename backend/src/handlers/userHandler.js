import prisma from "../db/prisma.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../service/user.service.js";
import { createUserValidationSchema } from "../validators/userValidator.js";
import { idValidator } from "../validators/validator.js";

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await getAllUsersService();
  if (!users) throw new Error("No users found");

  res.status(200).json({
    message: "Users fetched",
    data: users,
  });
});

const getUserById = asyncHandler(async (req, res) => {
  const id = idValidator.parse(req.params.id);

  const user = await getUserByIdService(id);
  if (!user) throw new Error("No user with that id found");

  res.status(200).json({
    message: "User fetched",
    data: user,
  });
});
const createUser = asyncHandler(async (req, res) => {
  const body = createUserValidationSchema.parse(req.body);

  const user = await createUserService(body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});
const updateUser = asyncHandler(async (req, res) => {
  const id = idValidator.parse(req.params.id);
  const body = createUserValidationSchema.parse(req.body);

  const user = await updateUserService(id, body);
  if (!user) throw new Error("No user with that id found");

  res.status(201).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});
const deleteUser = asyncHandler(async (req, res) => {
  const id = idValidator.parse(req.params.id);

  const user = await deleteUserService(id);
  if (!user) throw new Error("No user with that id found");

  res.status(201).json({
    success: true,
    message: "User deleted successfully",
    data: user,
  });
});

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
