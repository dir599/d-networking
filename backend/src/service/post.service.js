import prisma from "../db/prisma.js";

const getAllPostsService = async () => {
  return await prisma.post.findMany({
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};

const getPostByIdService = async (id) => {
  return await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};
const createPostService = async (body) => {
  const { content, image, authorId } = body;

  return await prisma.post.create({
    data: {
      content,
      image,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      createdAt: true,
    },
  });
};
const updatePostService = async (id, body) => {
  const { content, image } = body;

  return await prisma.post.update({
    where: {
      id,
    },
    data: {
      content,
      image,
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};
const deletePostService = async (id) => {
  const post = await prisma.post.delete({
    where: {
      id,
    },
    select: {
      id: true,
      content: true,
      image: true,
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
      comments: true,
      _count: {
        select: {
          postLikes: true,
          comments: true,
        },
      },
      createdAt: true,
    },
  });
};

export {
  getAllPostsService,
  getPostByIdService,
  createPostService,
  updatePostService,
  deletePostService,
};
