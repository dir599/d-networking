import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

const fileNamePath = fileURLToPath(import.meta.url);
const dirpath = path.dirname(fileNamePath);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(dirpath, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    let suffix = Date.now() + "-" + Math.round(Math.random() * "1e9");
    let extension = path.extname(file.originalname);
    cb(null, `${file.filename}-${suffix}${extension}`);
  },
});

export const upload = multer({
  storage,
  fileFilter: null,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
