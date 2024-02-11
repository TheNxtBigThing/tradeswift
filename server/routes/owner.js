import { createOwner,getOwner } from "../controllers/owner.js";
import express from "express";
const router = express.Router();
router.post("/", createOwner);
router.get("/:id", getOwner);

export default router;