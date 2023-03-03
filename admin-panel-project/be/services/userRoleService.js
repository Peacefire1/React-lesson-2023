import { pool } from "../config/mysql-conig.js";

export async function getRoles() {
  const [rows] = await pool.query(`select * from user_role `);
  return rows;
}
