import express from "express";
import { getImageFile } from "../s3.js";
const ImageRouter = express.Router();

ImageRouter.get("/:key", async (req, res) => {
  try {
    const key = req.params.key;
    // Call the function to fetch the file
    const { Body, ContentType } = await getImageFile(key);

    // Set appropriate response headers
    res.setHeader("Content-Type", ContentType);
    res.setHeader("Cache-Control", "public, max-age=31536000"); // Optimize caching

    // Send the image buffer
    res.send(Body);
  } catch (error) {
    console.error("Error serving image:", error);
    res.status(404).send("Image not found");
  }
});

export default ImageRouter;
