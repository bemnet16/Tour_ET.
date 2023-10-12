
import express from "express";

// import controllers
import { getAllBookings, addBooking, updateBooking, deleteBooking,calculatePrice,checkAndDeleteBooking} from "../controllers/bookingController.js";
/**
 * getAllBookings: for fetching all the bookings
 * getBooking: for fetching a specific booking
 * addBooking: for adding a new booking
 * updateBooking: for updating an existing booking
 * deleteBooking: for deleting an existing booking
*/

const bookingRouter = express.Router();

bookingRouter.get("/", getAllBookings);
bookingRouter.post("/", addBooking);
bookingRouter.post("/price", calculatePrice);
bookingRouter.patch("/:id", updateBooking);
bookingRouter.delete("/:id", checkAndDeleteBooking)
bookingRouter.delete("/:id/Force", deleteBooking);


export default bookingRouter;
