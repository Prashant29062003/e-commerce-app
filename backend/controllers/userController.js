import User from "../models/userModel";
import asyncHandler from "../middleware/asyncHandler";

const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error("Please fill all the inputs.");
    }

    const userExists = await User.findOne({ email })
    if (userExists) res.status(400).send("User already exist.")

})

export { createUser };