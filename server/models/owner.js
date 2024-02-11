import mongoose from "mongoose";
const ownerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    adhar: {
      type: String,
      required: true,
    },
    pancard: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const owner = mongoose.model("Owner", ownerSchema);
export default owner;
