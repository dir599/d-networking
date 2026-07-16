import prisma from "../db/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

const registerUserService = async (body) => {
  const { username, email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
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
};

const loginUserService = async (body) => {
  const { email, password } = body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new Error("Invalid email or password");
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");
  const token = jwt.sign(
    {
      id: user.id,
    },
    secretKey,
    {
      expiresIn: "1d",
    },
  );
  return 
};

export { registerUserService };
