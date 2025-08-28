import mongoose from "mongoose";

const auth0UserSchema = new mongoose.Schema({
  sub: { type: String, required: true, unique: true }, // Auth0 unique id
  name: { type: String },
  email: { type: String },
  picture: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=1024x1024&w=is&k=20&c=4vOXvZRvhvchTRbYn9SknimKUNvKPZyJdGzHvtjqg_w=",
  },
  lastLogin: { type: Date, default: Date.now },
}, { timestamps: true });

// Prevent OverwriteModelError
const Auth0User =
  mongoose.models.Auth0User || mongoose.model("Auth0User", auth0UserSchema);

export default Auth0User;
