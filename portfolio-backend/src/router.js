import express from "express";
import { sendMessage, viewMessage } from "./controller.js";

const router = express.Router();

// Router for send Message
router.post("/send", sendMessage);

// Router for view Message
router.get("/view", viewMessage);

export default router;