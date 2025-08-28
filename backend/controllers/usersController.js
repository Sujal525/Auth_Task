import CustomUser from "../models/CustomUser.js";
import Auth0User from "../models/Auth0User.js";

export const listAllUsers = async (req, res) => {
  try {
    const custom = await CustomUser.find({}, "-password").sort({ createdAt: -1 });
    const auth0 = await Auth0User.find({}).sort({ lastLogin: -1 });
    res.json({ custom, auth0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
