// backend/server.js

// Import dependencies
import express from "express";          // Express web framework
import dotenv from "dotenv";            // Load environment variables from .env
import cors from "cors";                // Middleware to handle cross-origin requests
import bodyParser from "body-parser";   // Middleware to parse JSON request bodies

// Import custom modules
import connectDB from "./config/db.js"; // MongoDB connection setup
import authRoutes from "./routes/authRoutes.js";     // signup/login routes
import auth0Routes from "./routes/auth0Routes.js";   // Auth0 user routes
import usersRoutes from "./routes/usersRoutes.js";   // list users route

// Load environment variables
dotenv.config();

// Create Express app instance
const app = express();

// ✅ Configure CORS (Cross-Origin Resource Sharing)
// For now, allows ALL origins (not recommended in production)
app.use(cors({
  origin: "*", // allow all origins (in production, replace with your frontend domain)
  methods: ["GET","POST","PUT","DELETE","OPTIONS"], // allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // allowed headers
  credentials: true // if cookies/auth headers are required
}));

// ✅ Parse JSON request bodies automatically
app.use(bodyParser.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Root route for testing server status
app.get("/", (req, res) => res.send("🚀 BanasTech Auth Backend Running"));

// ✅ Mount API routes
app.use("/api/auth", authRoutes);    // Custom signup/login routes
app.use("/api/auth0", auth0Routes);  // Auth0 user save routes
app.use("/api/users", usersRoutes);  // List users (from both collections)

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
