import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const protectRoute=async(req,res,next)=>{
    try {
        const token= req.cookies.jwt;
        if(!token) {
            return res.status(401).json({message:"Unauthorized - No token provided"});
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!decoded){
            return res.status(401).json({message:"unautharized - Invalid token"});
        }
        const user=await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({message:"unautharized - User Not found"});
        }

        req.user=user;
        next();

    } catch (error) {
        console.log("Error in protectRoute Middleware",error)
        return res.status(401).json({message:"internal server error"});
    }
}