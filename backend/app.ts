import express from "express";
import cors from "cors";
import chatRoutes from "./chatRoutes";
import { config } from "./env";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", 
}));
app.use(express.json());

// Routes
app.use("/api", chatRoutes);

export default app;

