import express from "express";

import {
  getAllRooms,
  getRoom,
  addRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/roomController.js";

const roomRouter = express.Router();

/**
 * - getAllRooms: for fetching all the Rooms
 * - getRoom: for fetching a specific Room
 * - addRoom: for adding a new Room
 * - updateRoom: for updating an existing Room
 * - deleteRoom: for deleting an existing Room
 */

roomRouter.get("/", getAllRooms);
roomRouter.get("/:id", getRoom);
roomRouter.post("/", addRoom);
roomRouter.patch("/:id", updateRoom);
roomRouter.delete("/:id", deleteRoom);

export default roomRouter;
