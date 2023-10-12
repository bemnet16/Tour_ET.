
import express from "express";


import {getAllHotels, getHotel, addHotel, updateHotel, deleteHotel,getHotelRoom} from "../controllers/hotelController.js";

/** 
 * - getAllHotels: for fetching all the agents
 * - getHotel: for fetching a specific agent
 * - addHotel: for adding a new agent
 * - updateHotel: for updating an existing agent
 * - deleteHotel: for deleting an existing agent
 */
const hotelRouter  = express.Router();


hotelRouter.get("/", getAllHotels);
hotelRouter.get("/:id", getHotel);
hotelRouter.get("/:id/room", getHotelRoom);
hotelRouter.post("/", addHotel);
hotelRouter.patch("/:id", updateHotel);
hotelRouter.delete("/:id", deleteHotel);

export default hotelRouter;
