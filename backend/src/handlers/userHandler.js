import prisma from "../db/prisma";
import { createUserValidationSchema } from "../validators/userValidator";
import { idValidator } from "../validators/validator";

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
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
  idValidator.parse(req.params);
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
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

export { getAllUsers, getUserById };
