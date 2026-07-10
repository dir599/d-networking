import { Router } from "express";
import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import commentRouter from "./commentRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("this is testing api.");
});
router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

export default router;
