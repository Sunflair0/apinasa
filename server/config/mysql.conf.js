import { createPool } from "mysql";
import { promisify } from "util";

const pool = createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_CLIENT,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();
  return;
});

const query = promisify(pool.query).bind(pool);

export default query;