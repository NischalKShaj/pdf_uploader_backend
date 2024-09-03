// <============================= file for the uploading of the pdf ======================>

// importing the required modules
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// setting the __dirname for the es6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configuring multer
const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, path.join(__dirname, "../uploads/pdf"));
  },
  filename: (req, file, next) => {
    next(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage: storage });
