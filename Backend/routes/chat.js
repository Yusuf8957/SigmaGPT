import express from "express";
import Thread from "../models/Thread.js";
import getGroqResponse from "../utils/openai.js";

const router = express.Router();

// Test
router.post("/test", async (req, res) => {
    try {
        const thread = new Thread({
            threadID: "abc",
            title: "Testing New Thread2"
        });
        const response = await thread.save();
        res.status(201).json(response);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

//Get all threads
router.get("/threads", async (req, res) => {
    try {
        const threads = await Thread.find({}).sort({ updatedAt: -1 });
        res.json(threads);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});

//Get single thread messages
router.get("/threads/:threadId", async (req, res) => {
    const { threadId } = req.params;
    try {
        const thread = await Thread.findOne({ threadID: threadId });
        if (!thread) {
            return res.status(404).json({ error: "Thread not found" });
        }
        res.json(thread.messages);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch chat" });
    }
});

// Delete thread
router.delete("/threads/:threadId", async (req, res) => {
    const { threadId } = req.params;
    try {
        const deletedThread = await Thread.findOneAndDelete({ threadID: threadId });
        if (!deletedThread) {
            return res.status(404).json({ error: "Thread not found" });
        }
        res.status(200).json({ success: "Thread deleted successfully" });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete thread" });
    }
});

router.post("/chat", async (req, res) => {
    const { threadId, message } = req.body;

    if (!threadId || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        let thread = await Thread.findOne({  threadId });

        if (!thread) {
            // create  a new thread in Db
            thread = new Thread({
                threadID: threadId,
                title: message,
                messages: [{ role: "user", content: message }]
            });
        } else {
            thread.messages.push({ role: "user", content: message });
        }

        const assistantReply = await getGroqResponse(thread.messages);

        thread.messages.push({ role: "assistant", content: assistantReply });
        thread.updatedAt = new Date();
        await thread.save();

        res.json({ reply: assistantReply });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;