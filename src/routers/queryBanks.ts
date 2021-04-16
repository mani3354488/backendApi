import express from "express";
import {
    getBanksAutocomplect,
    getBanksQuery
} from "../controllers/queryFunctions";

const router = express.Router();

router.use((req, res, next) => {
    console.log("server inside /api/branches");
    next();
})

type Params = {
    q?: string;
    limit?: number;
    offset?: number;
};

router.get("/autocomplected", async (req, res) => {
    const { q, limit, offset }: Params = req.query;

    const branches = await getBanksAutocomplect(q, limit, offset);

    res.json({branches});
});

router.get("/", async (req, res) => {
    const { q, limit, offset }: Params = req.query;

    const branches = await getBanksQuery(q!, limit, offset);

    res.json({branches});
});

export default router;
