import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.json({ message: "Authorizatoin header required" });
  if (!authHeader.startsWith("Bearer "))
    return res.json({ message: "Invalid authorization header" });
  let token = authHeader.split(" ")[1];
  if (!token) return res.json({ message: "Invalid token" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    req.user = user;

    next();
  } catch (e) {
    res.json({ message: "Invalid or expired token" });
  }
};
