import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import BankRouter from "./routers/queryBanks";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "api is working"});
});

app.use('/api/branches', BankRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
});

export default app;