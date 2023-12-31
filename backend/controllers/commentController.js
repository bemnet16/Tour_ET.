import User from "../Models/userModel.js";
import Comment from "../Models/commentModel.js";
import { authorizationChecker } from "../middleware/auth.js";
import { Types } from "mongoose";

export const getComment = async (req, res) => {
  try {
    const comments = await Comment.find({});
    return res.status(200).json({ data: comments });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const authorized = await authorizationChecker(req);
    if (authorized === "A") {
      return res.status(401).json({ msg: "token reqired" });
    } else if (authorized === "C") {
      return res.status(401).json({ msg: "not authorized" });
    }
    const { pkg, text } = req.body;

    const newcomment = { user: authorized.name, pkg, text };

    const comment = await Comment.create(newcomment);
    return res.status(201).json({ data: comment });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateComment = async (req, res) => {
  try {
    const comments = await Comment.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!comments) {
      res.status(404).json({ msg: "no such commet" });
    }
    return res.status(201).json({ data: comments });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
