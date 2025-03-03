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

// 🔹 Get Profile Picture
router.get("/profile-picture/:fileName", async (req: Request, res: Response) => {
  try {
    const { fileName } = req.params;
    if (!fileName) {
      return res.status(400).json({ error: "File name is required" });
    }

    const file = bucket.file(`profile_pictures/${fileName}`);

    // Check if file exists
    const [exists] = await file.exists();
    if (!exists) {
      return res.status(404).json({ error: "Profile picture not found" });
    }

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/profile_pictures/${fileName}`;
    res.status(200).json({ imageUrl: publicUrl });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
