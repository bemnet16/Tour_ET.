import express from "express";

// import controllers
import {
  signup,
  login,
  updateUser,
  getAllUsers,
} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.patch("/", updateUser);
userRouter.get("/", getAllUsers);

export default userRouter;
