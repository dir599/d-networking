import prisma from "../db/prisma.js";
import bcrypt from "bcrypt";

const getAllUsersService = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      _count: {
        select: {
          followers: true,
          following: true,
        },
      },
    },
  });
};

const getUserByIdService = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      _count: {
        select: {
          followers: true,
          following: true,
        },
      },
    },
  });
};

const updateUserService = async (id, body) => {
  const { username, email, role } = body;

  return await prisma.user.update({
    where: {
      id,
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
      _count: {
        select: {
          followers: true,
          following: true,
        },
      },
    },
  });
};

const deleteUserService = async (id) => {
  return await prisma.user.delete({
    where: {
      id,
    },
    select: {
      username: true,
      email: true,
      role: true,
      _count: {
        select: {
          followers: true,
          following: true,
        },
      },
    },
  });
};

export {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
};
