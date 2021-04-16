import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({message: "api is working"});
});

app.listen(3000, () => {
    console.log("Server running at port 3000")
});