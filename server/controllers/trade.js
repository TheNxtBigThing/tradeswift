import mongoose from "mongoose";
import Trade from "../models/trade.js"; // Assuming your Trade model is in "./trade.js"

// Create a new Trade
export const createTrade = async (req, res) => {
  try {
    const { companyname, type, owner, status, documents } = req.body;

    const newTrade = new Trade({
      companyname,
      type,
      owner,
      status,
      documents,
    });

    const createdTrade = await newTrade.save();
    res.status(201).json(createdTrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllTrade = async (req, res) => {
  try {
    const trade = await Trade.find().populate("owner").populate("documents");
    if (!trade) {
      return res.status(404).json({ message: "No not found" });
    }
    res.status(200).json(trade);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// Get a Trade by ID
export const getTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const trade = await Trade.findById(id)
      .populate("owner")
      .populate("documents");
    if (!trade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Trade by ID
export const updateTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTrade = await Trade.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTrade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(200).json(updatedTrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Trade by ID
export const deleteTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTrade = await Trade.findByIdAndDelete(id);
    if (!deletedTrade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(200).json({ message: "Trade deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
