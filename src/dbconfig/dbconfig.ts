import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    user: 'uwwbhwcdefchkqjjecxb',
    host: 'bjdsvullqjtg1ihjxa3s-postgresql.services.clever-cloud.com',
    database: 'bjdsvullqjtg1ihjxa3s',
    password: '4NNt3CN1fWPzj5rXUk0O',
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
        console.error(`\n \"${query}\"`);
        console.log(err);
    });

    client.release();
    return res;
};

process.on("exit", () => pool.end());

export default pool;
