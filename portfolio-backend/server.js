import dotenv from "dotenv";
import express from "express";
import app from "./src/app.js";

dotenv.config();

const server = express();

server.use("/api", app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});