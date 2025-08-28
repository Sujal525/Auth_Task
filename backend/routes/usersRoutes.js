import express from "express";
import { listAllUsers } from "../controllers/usersController.js";

const router = express.Router();
router.get("/", listAllUsers);

export default router;
