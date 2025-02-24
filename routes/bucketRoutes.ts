import express, { Request, Response } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { bucket } from "./firebase";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload-profile", upload.single("image"), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = req.file;
    const fileName = `profile_pictures/${uuidv4()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on("error", (err) => res.status(500).json({ error: err.message }));
    stream.on("finish", async () => {
      await fileUpload.makePublic(); // Make file public
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
      res.status(200).json({ imageUrl: publicUrl });
    });

    stream.end(file.buffer);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
