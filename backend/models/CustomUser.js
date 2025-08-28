import mongoose from "mongoose";

const customUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const CustomUser = mongoose.model("CustomUser", customUserSchema);
export default CustomUser;
