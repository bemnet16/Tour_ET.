import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import packageRouter from "./routes/packageRouter.js";
import hotelRouter from "./routes/hotelRouter.js";
import userRouter from "./routes/userRouter.js";
import commentRouter from "./routes/commentRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import roomRouter from "./routes/roomRouter.js";
import wishlistRouter from "./routes/wishlistRouter.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/package", packageRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", userRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/room", roomRouter);
app.use("/api/booking", bookingRouter);


mongoose.set("strictQuery", false);
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to database successfully`);
  } catch (error) {
    console.log(`this is an error message`);
    console.log(error.message);
  }
}

async function startServer() {
  try {
    app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    app.listen(process.env.PORT, (error) => {});
    console.log(`Listening through port ${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
}

connectToDb();
startServer();
