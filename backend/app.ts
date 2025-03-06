import * as express from "express";
import * as cors from "cors";
import chatRoutes from "./chatRoutes";
import { config } from "./env";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", chatRoutes);

export default app;

