// backend/controllers/customAuthController.js

import bcrypt from "bcryptjs"; // secure password hashing (salt + hash)
import jwt from "jsonwebtoken"; // to create JSON Web Tokens for authentication
import CustomUser from "../models/CustomUser.js"; // Mongoose model for user records

// Password validation helper that returns an error message string if invalid, or null if valid
const validatePassword = (password) => {
  const minLength = 8; // minimum length requirement
  const regex = {
    uppercase: /[A-Z]/, // at least one uppercase letter
    lowercase: /[a-z]/, // at least one lowercase letter
    number: /[0-9]/,    // at least one digit
    // at least one special character from the listed set
    specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  };

  // check minimum length
  if (password.length < minLength) return "Password must be at least 8 characters long.";
  // check uppercase
  if (!regex.uppercase.test(password)) return "Password must contain at least one uppercase letter.";
  // check lowercase
  if (!regex.lowercase.test(password)) return "Password must contain at least one lowercase letter.";
  // check number
  if (!regex.number.test(password)) return "Password must contain at least one number.";
  // check special character
  if (!regex.specialChar.test(password)) return "Password must contain at least one special character.";

  // if all checks pass, return null meaning "no error"
  return null;
};

// SIGNUP handler
export const signup = async (req, res) => {
  try {
    // get name, email, password from request body
    const { name, email, password } = req.body;
    // basic presence check — return 400 (Bad Request) if any are missing
    if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });

    // run password strength checks and return readable error if it fails
    const passwordError = validatePassword(password);
    if (passwordError) return res.status(400).json({ message: passwordError });

    // check if email already exists in DB
    const existing = await CustomUser.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    // hash the password using bcrypt with 10 salt rounds
    const hashed = await bcrypt.hash(password, 10);

    // build a new user document with hashed password (never store plain text)
    const user = new CustomUser({ name, email, password: hashed });

    // save user to database
    await user.save();

    // respond with 201 Created and return safe user info (no password)
    res.status(201).json({
      message: "Signup successful",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    // log error and return 500 Internal Server Error
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN handler
export const login = async (req, res) => {
  try {
    // extract email and password from request
    const { email, password } = req.body;
    // basic presence validation
    if (!email || !password) return res.status(400).json({ message: "Missing fields" });

    // find the user by email
    const user = await CustomUser.findOne({ email });
    // if user does not exist, return 404 Not Found
    if (!user) return res.status(404).json({ message: "User not found" });

    // compare the plaintext password with the stored hashed password
    const ok = await bcrypt.compare(password, user.password);
    // if password doesn't match, return 401 Unauthorized
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    // create a JWT with minimal payload (avoid putting sensitive data here)
    const token = jwt.sign(
      { id: user._id, email: user.email }, // payload
      process.env.JWT_SECRET,              // secret (must be set in env)
      { expiresIn: "1d" }                  // token expiry (1 day)
    );

    // return token and safe user info
    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    // log and return server error
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
