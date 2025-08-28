import express from "express";
import { saveAuth0User } from "../controllers/auth0controller.js";

const router = express.Router();
router.post("/save", saveAuth0User);

export default router;
