import prisma from "../db/prisma.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../middleware/asyncHandler.js";
import { loginUserValidator, registerUserValidator } from "../validators/authValidator.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = registerUserValidator.parse(req.body);
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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = loginUserValidator.parse(req.body);
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
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
});

export { registerUser, loginUser };
