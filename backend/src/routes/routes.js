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
router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);
router.use("/users", usersRouter);
router.use("/upload", uploadRouter);

export default router;
