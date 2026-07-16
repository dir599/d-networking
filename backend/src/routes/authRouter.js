import { Router } from "express";
import { registerUser } from "../handlers/authHandler";

const router = Router();

router.post("/register", registerUser);


export default router