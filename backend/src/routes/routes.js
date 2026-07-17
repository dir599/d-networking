import { Router } from "express";
import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import commentRouter from "./commentRouter.js";
import usersRouter from "./userRouter.js";
import uploadRouter from "./uploadRouter.js";
import authRouter from "./authRouter.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

// auth
router.use("/auth", authRouter);

router.get("/", (req, res) => {
  res.send("this is testing api.");
});

// api routes
router.use("/users", authMiddleware, userRouter);
router.use("/posts", authMiddleware, postRouter);
router.use("/posts", authMiddleware, postRouter);
router.use("/comments", authMiddleware, commentRouter);
router.use("/users", authMiddleware, usersRouter);
router.use("/upload", authMiddleware, uploadRouter);

export default router;
