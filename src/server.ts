import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.json({message: "api is working"});
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
});