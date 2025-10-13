import express from "express";
import { askGemini } from "../utils/openai.js";
const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const { message, history } = req.body;
        const reply = await askGemini(message, history);
        res.json({ reply });
    }
    catch (err) {
        console.error("Chat error:", err.message);
        res.status(500).json({ error: err.message });
    }
});
export default router;
