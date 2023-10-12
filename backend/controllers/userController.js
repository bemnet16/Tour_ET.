import mongoose from "mongoose";

import User from "../Models/userModel.js";
import { Types } from "mongoose";
//
// import Wishlist from "../Models/wishList.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import validator from "validator";

import bcrypt from "bcryptjs";
import { ObjectId } from "mongoose";
import { authorizationChecker } from "../middleware/auth.js";

// export default async (req,res)=>{
//     const {authorization}=req.headers;
//     if (!authorization){
//        return  "A"
//     }
//     const token=authorization.split(' ')[1];

//     /**
//      * here is the error
//     */
//     const {_id}= jwt.verify(token,process.env.KEY);
//     const id =Types.ObjectId(_id)

//     const user =await User.findOne({_id:id})
//     return user ? user : "C"
// }

// export const getAllUsers = async (req, res, next) => {
//     let users;
//     try {
//         users = await User.find();
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: error.message });
//     }

//     if (!users) {
//         return res.status(404).json({ message: "no users found!" });
//     }
//     return res.status(200).json({ users });
// }

// export const getProfile = async (req, res, next) => {
// }

// export const updateProfile = async (req, res, next) => {}

// authentication must be made here
// signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "invalid email format" });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ msg: "weak password" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ msg: "User account already exists, Login instead." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      password: hashedPassword,
      email,
    });

    const token = jwt.sign({ _id: newUser._id }, process.env.KEY);
    res.status(201).json({ data: { token, detail: newUser } });
    // console.log( name, email, password)
    res.status(200).json({ name, email, password });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

// login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User account dosnt exists" });
    }
    const passCheck = await bcrypt.compare(password, user.password);
    if (!passCheck) {
      return res.status(400).json({ msg: "incorrect password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.KEY);
    res.status(201).json({ data: { token, detail: user } });
  } catch (error) {
    res.json({ msg: error.message });
  }

  // if that email exists compare the password, returns a boolean
};

export const updateUser = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "A") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ msg: "not auth" });
    }
    const user = await User.findOneAndUpdate({ _id: auth.id }, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ msg: "No such user " });
    }

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// // add a package to the user's wish list
// export const addToWishlist = async (req, res, next) => {
//     try {
//         // Find the user by id
//         const user = await User.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({msg: 'User not found' });
//         }

//         // Find the package by id
//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         // Add the package to the user's cart
//         user.wishList.push(_package);

//         // Save the user
//         await user.save();

//         res.status(200).json({ message: 'Package added to cart successfully' });
//     } catch (err) {
//         next(err);
//     }
// };

// // book a package
// export const bookPackage = async (req, res, next) => {

//     try {
//         // Find the user by id
//         const user = await User.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Find the package by id
//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         // Add the package to the user's cart
//         user.bookedPackages.pop(_package);

//         // Save the user
//         await user.save();

//         res.status(200).json({ message: 'Package booked !' });
//     } catch (err) {
//         next(err);
//     }
// };

// export const viewWishlist = async (req, res, next) => {}

// // remove a package from wish list
// export const removeFromWishlist = async (req, res, next) => {
//     try {
//         // Find the user by id
//         const existingUser = await User.findById(req.params.userId);
//         if (!existingUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Find the package by id
//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         // Add the package to the existingUser's cart
//         let newWishList = [];

//         for (let i = 0; i < existingUser.wishList.length; i ++){
//             if (existingUser.wishList[i] !== _package){
//                 newWishList.push(existingUser.wishList[i] );
//             }
//         }

//         existingUser.wishList = newWishList;

//         // Save the existingUser
//         await existingUser.save();

//         res.status(200).json({ message: 'Package removed from wishlist successfully' });
//     } catch (err) {
//         next(err);
//     }
// };

// // cancel a booked package
// export const removeFromBookedPackages = async (req, res, next) => {
//     try {
//         // Find the user by id
//         const user = await User.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Find the package by id
//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         // Add the package to the user's cart
//         let newWishList = [];

//         for (let i = 0; i < user.wishList.length; i ++){
//             if (user.bookedPackages[i] !== _package){
//                 newWishList.push(user.bookedPackages[i] );
//             }
//         }

//         user.bookedPackages = newWishList;

//         // Save the user
//         await user.save();

//         res.status(200).json({ message: 'Package unbooked Successfully' });
//     } catch (err) {
//         next(err);
//     }
// };
