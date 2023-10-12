import mongoose from "mongoose";

/* importing all the models needed inthis */
import Package from "../Models/packageModel.js";
import Comment from "../Models/commentModel.js";
import Hotel from "../Models/hotelModel.js";
import { authorize, authorizationChecker } from "../middleware/auth.js";
export const getAllPackages = async (req, res) => {
  try {
    let query = {};

    if (req.query.type) {
      query.type = req.query.type;
    }
    if (req.query.priceRange) {
      query.priceRange = req.query.priceRange;
    }
    if (req.query.location) {
      query.location = { $regex: req.query.location, $options: "i" };
    }
    if (req.query.rating) {
      query.rating = req.query.rating;
    }
    let packages = Package.find(query);
    if (req.query.sort) {
      const sort_param = req.query.sort.split(",").join(" ");
      packages = packages.sort(sort_param);
    } else {
      packages = packages.sort("-createdAt");
    }
    const limit = Number(req.query.limit) || 4;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;
    packages = await packages.skip(skip).limit(limit);
    if (!packages) {
      return res.status(404).json({ msg: "no packages for today!" });
    }
    return res.status(200).json({ data: packages });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getPackage = async (req, res) => {
  const pkg_id = req.params.id;
  try {
    const pkg = await Package.findById(pkg_id);
    if (!pkg) {
      return res.status(404).json({ msg: "no such package exists sorry " });
    }
    return res.status(200).json({ data: pkg });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const getPkgComment = async (req, res) => {
  const pkg_id = req.params.id;
  try {
    const pkg = await Comment.find({ pkg: pkg_id }).sort("-createdAt").limit(6);
    if (!pkg) {
      return res.status(404).json({ msg: "no such package exists sorry " });
    }
    return res.status(200).json({ data: pkg });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const getPkgHotel = async (req, res) => {
  const pkg_id = req.params.id;
  try {
    const selectedpkg = await Package.find({ _id: pkg_id });

    const pkg = selectedpkg[0].location;
    console.log(pkg);
    const hotel = await Hotel.find({ location: pkg });
    if (!hotel) {
      return res.status(404).json({ msg: "no such package exists sorry " });
    }
    return res.status(200).json({ data: hotel });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const addPackage = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "A") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ msg: "not auth" });
    }
    // authorize(res,auth,"admin")
    const pkg = await Package.create(req.body);
    res.status(200).json({ success: true, data: pkg });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updatePackage = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "A") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ msg: "not auth" });
    }
    authorize(res, auth, "admin");
    const pkg = await Package.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ msg: "No such package " });
    }
    res.status(200).json({ success: true, data: pkg });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deletePackage = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "A") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ msg: "not auth" });
    }
    const pkg = await Package.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ data: pkg });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const ratePackage = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);

    if (auth === "A") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ msg: "not auth" });
    }
    const pkg_id = req.params.id;
    const pkg_rate = await Package.findById(pkg_id).select(
      "rating  totalRatings"
    );
    if (!pkg_rate) {
      return res.status(404).json({ msg: "no such package exists sorry" });
    }
    const new_rating =
      (req.body.user_rate + pkg_rate.totalRatings * pkg_rate.rating) /
      (pkg_rate.totalRatings + 1);
    const updated_one = {
      totalRatings: pkg_rate.totalRatings + 1,
      rating: new_rating,
    };
    const newpkg = await Package.findOneAndUpdate(
      { _id: pkg_id },
      updated_one,
      { new: true }
    );
    res.status(200).json({ data: newpkg });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};
