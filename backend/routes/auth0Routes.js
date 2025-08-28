// backend/routes/auth0Routes.js

import express from "express";                          // Express library
import { saveAuth0User } from "../controllers/auth0controller.js"; // controller that handles the save/upsert logic

const router = express.Router();                       // create a router instance for auth0-related endpoints

// POST /save -> calls saveAuth0User controller
router.post("/save", saveAuth0User);

// Export router so it can be mounted in server.js
export default router;
