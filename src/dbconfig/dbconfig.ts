import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    user: process.env.POSTGRESQL_ADDON_USER,
    host: process.env.POSTGRESQL_ADDON_HOST,
    database: process.env.POSTGRESQL_ADDON_DB,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    port: 5432,
});

pool.on("connect", (client) => {
    console.log("client connection has been established");
});

pool.on("error", (err, client) => {
    console.log(err);
    process.exit(-1);
});

export const execQuery = async (query: string) => {
    const client = await pool.connect();

    const res = await client.query(query).catch((err) => {
        console.log(err);
    });

    client.release();
    return res;
};

process.on("exit", () => pool.end());

export default pool;
