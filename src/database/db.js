import pkg from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config();

const { Pool } = pkg;

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


const db = drizzle(pool);

export { db, pool };
