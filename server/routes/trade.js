import express from "express";
import {
  createTrade,
  getTrade,
  updateTrade,
  deleteTrade,
  getAllTrade,
} from "../controllers/trade.js";

const router = express.Router();

router.get("/", getAllTrade);
router.post("/", createTrade);
router.get("/:id", getTrade);
router.patch("/:id", updateTrade);
router.delete("/:id", deleteTrade);

export default router;
