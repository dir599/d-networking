import prisma from "../db/prisma.js";

const getAllCommentsService = async () => {
  return await prisma.comment.findMany({
    select: {
      id: true,
      content: true,
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          profileImage: true,
          bio: true,
          role: true,
        },
      },
      post: true,
      _count: {
        select: {
          commentLikes: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};

const getCommentByIdService = async (id) => {
  return await prisma.comment.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      content: true,
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          profileImage: true,
          bio: true,
          role: true,
        },
      },
      post: true,
      _count: {
        select: {
          commentLikes: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};
const createCommentService = async (body) => {
  const { content, authorId, postId } = body;

  return await prisma.comment.create({
    data: {
      content,
      author: { connect: { id: authorId } },
      post: {
        connect: {
          id: postId,
        },
      },
    },
    select: {
      id: true,
      content: true,
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          profileImage: true,
          bio: true,
          role: true,
        },
      },
      post: true,
      _count: {
        select: {
          commentLikes: true,
        },
      },
      createdAt: true,
    },
  });
};
const updateCommentService = async (id, body) => {
  const { content } = body;

  return await prisma.comment.update({
    where: {
      id,
    },
    data: {
      content,
    },
    select: {
      id: true,
      content: true,
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          profileImage: true,
          bio: true,
          role: true,
        },
      },
      post: true,
      _count: {
        select: {
          commentLikes: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};
const deleteCommentService = async (id) => {
  return await prisma.comment.delete({
    where: {
      id,
    },
    select: {
      id: true,
      content: true,
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          profileImage: true,
          bio: true,
          role: true,
        },
      },
      post: true,
      _count: {
        select: {
          commentLikes: true,
        },
      },
      createdAt: true,
    },
  });
};

export {
  getAllCommentsService,
  getCommentByIdService,
  createCommentService,
  updateCommentService,
  deleteCommentService,
};
