import express from "express";
import { createDocument, getDocument, updateDocument, deleteDocument } from "../controllers/document.js";

const router = express.Router();

router.post("/", createDocument);
router.get("/:id", getDocument);
router.patch("/:id", updateDocument);
router.delete("/:id", deleteDocument);

export default router;
