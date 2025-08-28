// backend/models/CustomUser.js

import mongoose from "mongoose"; // Mongoose ODM

// Define schema for users who sign up with our custom auth (email + password)
const customUserSchema = new mongoose.Schema(
  {
    // User's display name (required)
    name: { type: String, required: true },

    // User email (required). unique:true creates a unique index in MongoDB.
    // Note: unique is an index hint — handle duplicate key errors in code.
    email: { type: String, required: true, unique: true },

    // Hashed password (required). Store hashes only (bcrypt/argon2), never plain text.
    password: { type: String, required: true },
  },
  {
    // Automatically adds createdAt and updatedAt Date fields
    timestamps: true,
  }
);

// Create the model from the schema
const CustomUser = mongoose.model("CustomUser", customUserSchema);

// Export the model for use in controllers/services
export default CustomUser;
