// backend/controllers/auth0controller.js

import Auth0User from "../models/Auth0User.js"; // Mongoose model representing Auth0 users

/**
 * Accepts body: { sub, name, email, picture }
 * Upserts an Auth0User so repeated logins update lastLogin.
 */
export const saveAuth0User = async (req, res) => {
  try {
    // Pull required/optional fields from the request body
    const { sub, name, email } = req.body;

    // 'sub' is Auth0's stable user identifier (required here)
    if (!sub) return res.status(400).json({ message: "Missing sub (Auth0 user id)" });

    // Build the update payload. lastLogin records current time of login.
    const update = { name, email, lastLogin: new Date() };

    // Options:
    // upsert: create if not found,
    // new: return the modified document,
    // setDefaultsOnInsert: apply schema defaults if a new doc is created.
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // Atomically find and update (or insert) the Auth0 user document
    const user = await Auth0User.findOneAndUpdate({ sub }, update, options);

    // Respond with the saved user document (post-update)
    res.json({ message: "Auth0 user saved", user });
  } catch (err) {
    // Log and return a server error. In production, pipe this to your logger/monitoring.
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
