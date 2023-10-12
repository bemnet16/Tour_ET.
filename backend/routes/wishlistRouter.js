import express from "express";
import { getWishlist, deleteWishlist, createWishlist } from "../controllers/wishlistController.js"
const wishlistRouter = express.Router();
wishlistRouter.get("/", getWishlist);
wishlistRouter.post("/", createWishlist);
wishlistRouter.delete("/:id", deleteWishlist)
export default wishlistRouter