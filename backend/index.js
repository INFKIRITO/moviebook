import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import connectDB from "./databases/db.js";
import userRoutes from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

// Resolve directory paths for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// CORS Configuration
app.use(cors({
    origin: ["http://localhost:3000", "https://moviebook-ashy.vercel.app"], // Your frontend URL
    optionsSuccessStatus: 200,
    credentials: true // Include credentials if needed (like cookies, authorization headers, etc.)
}));

// Define routes
app.use("/api/v1/auth", userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Define PORT
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
