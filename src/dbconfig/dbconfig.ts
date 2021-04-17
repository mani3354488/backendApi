import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    user: 'uj0makxizfh5usbpujoi',
    host: 'b753jpx78siil6d92hnf-postgresql.services.clever-cloud.com',
    database: 'b753jpx78siil6d92hnf',
    password: 'x7fzL00DdYc6NUOKqT1C',
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
