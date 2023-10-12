import jwt from "jsonwebtoken"
import User from "../Models/userModel.js";
import { Types } from "mongoose";
export async function authorizationChecker(req,res){
    const {authorization}=req.headers;
    if (!authorization){
       return  "A"
    }
    const token=authorization.split(' ')[1];
    
    /** 
     * here is the error
    */
    const {_id}= jwt.verify(token,process.env.KEY);
    const id =Types.ObjectId(_id)
   
    const user =await User.findOne({_id:id})
    return user ? user : "C"
}
export function authorize(res,user,role){
    if (user.role!=role){
        return res.status(400).json({msg:"not authorized"})
    }
}