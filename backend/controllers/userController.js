import User from "../models/userModel";
import asyncHandler from "../middleware/asyncHandler";

const createUser = asyncHandler(async (req,res)=>{
    res.send("Hay");
})