import mongoose from "mongoose";
const documentSchema = mongoose.Schema(
  {
    documentname: {
      type: String,
      required: true,
    },

    documenturl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const document = mongoose.model("Document", documentSchema);
export default document;
