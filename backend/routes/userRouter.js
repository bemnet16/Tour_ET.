
import express from "express";

// import controllers
import { signup, login,updateUser} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.patch("/", updateUser);



export default userRouter;
