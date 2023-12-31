import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import { Types } from "mongoose";

export async function authorizationChecker(req, res) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return "NO-TOKEN";
    }

    const { _id } = jwt.verify(token, process.env.KEY);
    const id = Types.ObjectId(_id);

    const user = await User.findOne({ _id: id });
    if (!user) {
      return "NOT-AUTHENTICATED";
    } else {
      return user;
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error auth 29" });
  }
}

export function authorize(res, user, role) {
  if (user.role != role) {
    return res.status(400).json({ msg: "not authorized" });
  }
}
