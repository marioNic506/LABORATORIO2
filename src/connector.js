import pg from "pg";
import { config } from "../config.js";

const { database } = config;

console.log(database);

const pool = new pg.Pool({
  host: database.host,
  user: database.user,
  password: database.password,
  database: database.database,
  port: database.port,
});

export default pool;
