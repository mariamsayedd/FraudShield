import { Request, Response } from "express";
import { generateAIResponse } from "./geminiService";

export const chatWithAI = async (req: Request, res: Response): Promise<void> => {
    try {
      const { message } = req.body;
      if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
      }
  
      const aiResponse = await generateAIResponse(message);
      res.json({ response: aiResponse });
    } catch (error) {
      console.error("ChatWithAI Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

