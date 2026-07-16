import { Router } from "express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { upload } from "../middleware/upload.middleware.js";
import {
  uploadHandler,
  uploadMultipleFiles,
} from "../handlers/uploadHandler.js";

// /upload 
const fileNamePath = fileURLToPath(import.meta.url);
const dirpath = path.dirname(fileNamePath);

const router = Router();

router.post("/", upload.single("profile"), uploadHandler);
router.post("/multi-files", upload.array("images", 3), uploadMultipleFiles);

router.use("/", express.static(path.join(dirpath, "..", "/uploads")));

export default router;
