// backend/models/Auth0User.js

import mongoose from "mongoose"; // Mongoose ODM to define schema & model

// Define the schema for an Auth0 user document
const auth0UserSchema = new mongoose.Schema(
  {
    // 'sub' is the unique identifier provided by Auth0 or OAuth provider.
    // It's required and we set unique:true so MongoDB creates a unique index.
    sub: { type: String, required: true, unique: true },

    // User's display name (optional)
    name: { type: String },

    // Email if provided by provider
    email: { type: String },

    // Picture URL: use provider image if present; otherwise a default placeholder
    picture: {
      type: String,
      default:
        "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=1024x1024&w=is&k=20&c=4vOXvZRvhvchTRbYn9SknimKUNvKPZyJdGzHvtjqg_w=",
    },

    // Track the last login time; default to now when document is created
    lastLogin: { type: Date, default: Date.now },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

// Avoid OverwriteModelError in environments that re-run module code (hot reload / serverless)
const Auth0User =
  mongoose.models.Auth0User || mongoose.model("Auth0User", auth0UserSchema);

export default Auth0User;
