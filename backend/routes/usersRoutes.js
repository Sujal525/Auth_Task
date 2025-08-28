// backend/routes/userRoutes.js

import express from "express"; 
// Import the controller function that handles the logic
import { listAllUsers } from "../controllers/usersController.js";

const router = express.Router(); // Create a new router instance

// Route: GET /
// Purpose: Return a list of all users (both custom-auth and Auth0 users)
// Controller: listAllUsers (handles DB queries & response formatting)
router.get("/", listAllUsers);

// Export the router to be mounted in server.js
export default router;
