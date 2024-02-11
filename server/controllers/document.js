import mongoose from "mongoose";
import Document from "../models/document.js";

// Create a new Document
export const createDocument = async (req, res) => {
  try {
    const { documentname, documenturl } = req.body;

    const newDocument = new Document({
      documentname,
      documenturl,
    });

    const createdDocument = await newDocument.save();
    res.status(201).json(createdDocument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a Document by ID
export const getDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Document by ID
export const updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDocument = await Document.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json(updatedDocument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Document by ID
export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDocument = await Document.findByIdAndDelete(id);
    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
