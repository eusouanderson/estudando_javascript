import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DATA_BASE_USER,
  host: process.env.DATA_BASE_HOST,
  database: process.env.DATA_BASE_DATABASE,
  password: process.env.DATA_BASE_PASSWORD,
  port: process.env.DATA_BASE_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

async function getClient() {
  return await pool.connect();
}

async function getUsers() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM users");
    return res.rows;
  } finally {
    client.release();
  }
}

export { pool, getClient, getUsers };
