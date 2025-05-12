import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();

app.use(cors({
    origin: "",
    methods: ["GET", "POST"]
}));

app.use(express.json());

app.use("/message", router);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error.message}` });
});

export default app;
