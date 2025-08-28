// backend/routes/authRoutes.js

import express from "express"; 
// Import controllers that contain the actual business logic for signup & login
import { signup, login } from "../controllers/customAuthController.js";

// Create a new router instance (mini Express app)
const router = express.Router();

// Route: POST /signup
// Purpose: Register a new user (calls signup controller)
router.post("/signup", signup);

// Route: POST /login
// Purpose: Authenticate an existing user and return a JWT (calls login controller)
router.post("/login", login);

// Export router so it can be mounted in server.js
export default router;
