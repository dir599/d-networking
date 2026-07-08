import { Router } from "express";
import userRouter from "./userRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("this is testing api.");
});
router.use("/users", userRouter);

export default router;
