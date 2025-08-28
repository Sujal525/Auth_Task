import Auth0User from "../models/Auth0User.js";

/**
 * Accepts body: { sub, name, email, picture }
 * Upserts an Auth0User so repeated logins update lastLogin.
 */
export const saveAuth0User = async (req, res) => {
  try {
    const { sub, name, email} = req.body;
    if (!sub) return res.status(400).json({ message: "Missing sub (Auth0 user id)" });

    const update = { name, email, lastLogin: new Date() };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const user = await Auth0User.findOneAndUpdate({ sub }, update, options);
    res.json({ message: "Auth0 user saved", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
