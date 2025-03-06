"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const chatRoutes_1 = require("./chatRoutes");
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use("/api", chatRoutes_1.default);
exports.default = app;
