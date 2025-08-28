// backend/controllers/userController.js

import CustomUser from "../models/CustomUser.js"; // Model for users created via custom signup/login
import Auth0User from "../models/Auth0User.js";   // Model for users authenticated through Auth0

// Controller to list ALL users from both systems
export const listAllUsers = async (req, res) => {
  try {
    // Fetch all custom (email+password) users
    // Exclude the password field explicitly with "-password" (never expose it in responses!)
    // Sort by 'createdAt' descending → newest users first
    const custom = await CustomUser.find({}, "-password").sort({ createdAt: -1 });

    // Fetch all Auth0 users
    // Auth0 users don’t have passwords in our DB, but we want to show them sorted
    // by their last login time (most recently active first)
    const auth0 = await Auth0User.find({}).sort({ lastLogin: -1 });

    // Respond with both user sets in one JSON object
    res.json({ custom, auth0 });
  } catch (err) {
    // If there’s any error (e.g., DB connection issue), log it and send 500
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
