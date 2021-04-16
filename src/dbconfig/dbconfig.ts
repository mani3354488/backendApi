import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
});

pool.on("connect", (client) => {
    console.log("client connection has been established");
});

pool.on("error", (err, client) => {
    console.log(err);
    process.exit(-1);
});
