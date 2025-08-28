import mongoose from "mongoose";                // Load mongoose, the ODM that talks to MongoDB

const connectDB = async () => {                // Define an async function we will call to connect
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });                                        // Try to establish a connection to MongoDB
    console.log("✅ MongoDB connected");        // If connect succeeds, log confirmation
  } catch (err) {
    console.error("❌ MongoDB connection error:", err); // If connect fails, log error
    process.exit(1);                            // Exit process with non-zero code (stop app)
  }
};

export default connectDB;                      // Export the function so server.js can import & call it
