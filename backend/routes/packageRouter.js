
import express from "express";

// import controllers
import { getAllPackages, getPackage, ratePackage,updatePackage ,deletePackage,addPackage,getPkgComment,getPkgHotel} from "../controllers/packageController.js";

const packageRouter = express.Router();

/**
 * - getAllPackages: for fetching all the packages
 * - getPackage: for fetching a specific package
 * - searchPackages: for searching packages based on certain criteria
 * - addPackage: for adding a new package
 * - updatePackage: for updating an existing package
 * - deletePackage: for deleting an existing package
 */
packageRouter.get("/", getAllPackages);
packageRouter.get("/:id", getPackage);
packageRouter.get("/:id/comment", getPkgComment);
packageRouter.get("/:id/hotel", getPkgHotel);
packageRouter.patch("/:id", ratePackage);
packageRouter.post("/", addPackage);
packageRouter.patch("/:id/admin", updatePackage);
packageRouter.delete("/:id", deletePackage);



export default packageRouter;
