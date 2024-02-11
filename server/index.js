import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import tradeRoutes from "./routes/trade.js";
import ownerRoutes from "./routes/owner.js";
import documentRoutes from "./routes/document.js";
import paymentOrderRoutes from "./routes/paymentorder.js";
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("backend server is running on", PORT);
});
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("mongodb connetced!"))
  .catch((err) => console.log("error while connecting mongodb", err));
app.get("/api/test", (req, res) => {
  console.log("test successfull!");
  res.status(200).json("success");
});

app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentOrderRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/document", documentRoutes);
app.use("/api/trade", tradeRoutes);
