"use strict";
// import * as express from "express";
// import { chatWithAI } from "./chatController";
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// // POST route for chatbot interaction
// router.post("/chat", chatWithAI);
// export default router;
const express_1 = require("express");
const chatController_1 = require("./chatController");
const router = (0, express_1.Router)();
// Fix: Ensure chatWithAI is passed correctly as a request handler
router.post("/chat", chatController_1.chatWithAI);
router.get("/chat", (req, res) => {
    res.send("This is a POST API. Use Thunder Client or Postman to test it.");
});
exports.default = router;
