import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.json({ message: "Authorizatoin header required" });
  if (!authHeader.startsWith("Bearer "))
    return res.json({ message: "Invalid authorization header" });
  let token = authHeader.split(" ")[1];
  if (!token) return res.json({ message: "Invalid token" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    res.json({ message: "Invalid or expired token" });
  }
};
