// import * as express from "express";
// import { chatWithAI } from "./chatController";

// const router = express.Router();

// // POST route for chatbot interaction
// router.post("/chat", chatWithAI);

// export default router;

import { Router } from "express";
import { chatWithAI } from "./chatController";

const router = Router();

// Fix: Ensure chatWithAI is passed correctly as a request handler
router.post("/chat", chatWithAI);
router.get("/chat", (req, res) => {
    res.send("This is a POST API. Use Thunder Client or Postman to test it.");
});



export default router;
