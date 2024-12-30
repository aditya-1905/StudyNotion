const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

exports.auth = async(req, res, next) => {
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }

        console.log("Received token:", token);

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded token:", decode);
            req.user = decode;
        } 
        catch (error) {
            console.error("Token verification error:", error.message);
            return res.status(401).json({
                success: false,
                message: 'Token is invalid',
            });
        }
        
        next();
    } 
    catch (error) {
        console.error("Unexpected error:", error.message);
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the token",
        });
    }
}



exports.isStudent = async(req,res,next) => {
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Student only",
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified, please try again",
        })
    }
}



exports.isInstructor = async(req,res,next) => {
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructor only",
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified, please try again",
        })
    }
}


exports.isAdmin = async(req,res,next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only",
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified, please try again",
        })
    }
}