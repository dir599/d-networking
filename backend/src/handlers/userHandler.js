import prisma from "../db/prisma.js";
import { createUserValidationSchema } from "../validators/userValidator.js";
import { idValidator } from "../validators/validator.js";
import bcrypt from "bcrypt";

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });
    if (!users)
      return res.status(404).json({
        message: "No users found",
      });
    res.status(200).json({
      message: "Users fetched",
      data: users,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch users",
      error: e,
    });
  }
};

const getUserById = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation errors
  const { id } = req.params;
  try {
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
    if (!user)
      return res.status(404).json({
        message: "No user with that id found",
      });
    res.status(200).json({
      message: "User fetched",
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Failed to fetch user",
      error: e,
    });
  }
};
const createUser = async (req, res) => {
  const result = createUserValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
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
  } catch (e) {
    console.log(e);

    return res.status(400).json({
      success: false,
      message: "Failed to create user",
      error: e.message,
    });
  }
};
const updateUser = async (req, res) => {
  const idResult = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  const result = createUserValidationSchema.parse(req.body);
  // todo: handle this error correctly with zod error
  if (!result) {
    return res.status(400).json({
      message: "Invalid data",
    });
  }
  // todo: might need some changes in the future. This is just a placeholder
  const { username, email, role } = req.body;
  try {
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
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to update user",
      error: e,
    });
  }
};
const deleteUser = async (req, res) => {
  const result = idValidator.parse(req.params.id);
  // todo: handle validation error
  const { id } = req.params;
  // todo: might need some changes in the future. This is just a placeholder
  try {
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
    res.status(201).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to delete user",
      error: e,
    });
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
