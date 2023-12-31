import User from "../Models/userModel.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcryptjs";
import { authorizationChecker } from "../middleware/auth.js";

export const getAllUsers = async (req, res) => {
  const auth = await authorizationChecker(req);

  if (auth === "NO-TOKEN") {
    return res.status(401).json({ msg: "token reqired" });
  } else if (auth === "NOT-AUTHENTICATED") {
    return res.status(401).json({ msg: "not auth" });
  }
  authorize(res, auth, "admin");

  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
  if (!users) {
    return res.status(404).json({ message: "no users found!" });
  }
  return res.status(200).json({ users });
};

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
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

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
};

export const updateUser = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "NO-TOKEN") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (auth === "NOT-AUTHENTICATED") {
      return res.status(401).json({ msg: "not auth" });
    }

    let { password } = req.body;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
    }

    const user = await User.findOneAndUpdate(
      { _id: auth.id },
      { ...req.body, password },
      {
        new: true,
      }
    );

    if (!user) {
      return res.status(404).json({ msg: "No such user " });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const _package = await Package.findById(req.params.packageId);
    if (!_package) {
      return res.status(404).json({ message: "Package not found" });
    }

    user.wishList.push(_package);

    await user.save();

    res.status(200).json({ message: "Package added to cart successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "internal error", error: err.message });
  }
};

// export const bookPackage = async (req, res, next) => {

//     try {
//         const user = await User.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         user.bookedPackages.pop(_package);

//         await user.save();

//         res.status(200).json({ message: 'Package booked !' });
//     } catch (err) {
//         next(err);
//     }
// };

// export const viewWishlist = async (req, res, next) => {}

// export const removeFromWishlist = async (req, res, next) => {
//     try {
//         const existingUser = await User.findById(req.params.userId);
//         if (!existingUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         let newWishList = [];

//         for (let i = 0; i < existingUser.wishList.length; i ++){
//             if (existingUser.wishList[i] !== _package){
//                 newWishList.push(existingUser.wishList[i] );
//             }
//         }

//         existingUser.wishList = newWishList;

//         await existingUser.save();

//         res.status(200).json({ message: 'Package removed from wishlist successfully' });
//     } catch (err) {
//         next(err);
//     }
// };

// export const removeFromBookedPackages = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const _package = await Package.findById(req.params.packageId);
//         if (!_package) {
//             return res.status(404).json({ message: 'Package not found' });
//         }

//         let newWishList = [];

//         for (let i = 0; i < user.wishList.length; i ++){
//             if (user.bookedPackages[i] !== _package){
//                 newWishList.push(user.bookedPackages[i] );
//             }
//         }

//         user.bookedPackages = newWishList;

//         await user.save();

//         res.status(200).json({ message: 'Package unbooked Successfully' });
//     } catch (err) {
//         next(err);
//     }
// };
