import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import auth0Routes from "./routes/auth0Routes.js";
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();
const app = express();

// CORS: allow local + prod from env
const allowedOrigins = [
  process.env.FRONTEND_LOCAL,
  process.env.FRONTEND_PROD,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow curl/postman
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"), false);
    }
  },
}));

app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => res.send("🚀 BanasTech Auth Backend Running"));

app.use("/api/auth", authRoutes);    // custom signup/login
app.use("/api/auth0", auth0Routes);  // save auth0 user
app.use("/api/users", usersRoutes);  // list users (both collections)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
