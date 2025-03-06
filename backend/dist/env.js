"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = {
    port: process.env.PORT || 5000,
    geminiApiKey: process.env.GEMINI_API_KEY || "",
};
