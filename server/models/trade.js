import mongoose from "mongoose";
import Owner from "./owner.js";
const tradeSchema = mongoose.Schema(
  {
    companyname: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    owner: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Owner",
        required: true,
      },
    ],

    status: {
      type: String,
    },
    documents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Trade = mongoose.model("Trade", tradeSchema);
export default Trade;
