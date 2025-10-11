"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openai_js_1 = require("../utils/openai.js");
const router = express_1.default.Router();
router.post("/", async (req, res) => {
    try {
        const { message, history } = req.body;
        const reply = await (0, openai_js_1.askGemini)(message, history);
        res.json({ reply });
    }
    catch (err) {
        console.error("Chat error:", err.message);
        res.status(500).json({ error: err.message });
    }
});
exports.default = router;
