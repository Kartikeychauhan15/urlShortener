import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req,res,next) => {
    // console.log("attachUser middleware called");
    const token = req.cookies.accessToken;
    // console.log(token,"token hai");
    if(!token) {
        console.log("No token found in cookies");
        return next();
    }
    try {
        const decoded = verifyToken(token);
        // console.log(decoded);
        const user = await findUserById(decoded);
        // console.log("User found:", user);
        if(!user) {
            return next();
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        // If token verification fails, we can still proceed without attaching user
        return next();
    }
}