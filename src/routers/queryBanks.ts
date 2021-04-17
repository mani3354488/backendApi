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

router.get("/autocomplete", async (req, res) => {
    const { q, limit, offset }: Params = req.query;
    try {
        
        const branches = await getBanksAutocomplect(q, limit, offset);

        res.json({branches});
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
});

router.get("/", async (req, res) => {
    const { q, limit, offset }: Params = req.query;
    try {
        const branches = await getBanksQuery(q!, limit, offset);

        res.json({branches});
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
});

export default router;
