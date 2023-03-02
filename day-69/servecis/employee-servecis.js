import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(`select * from employees limit 10`);
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}
export async function hireEmployee(
  empNo,
  birthDay,
  firstName,
  lastName,
  gender,
  hireDate
) {
  //   const query = `insert into employees values(500001,"1990-01-01","jhon","McKay","M","2020-0101");`;

  const query = `insert into employees values(?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    empNo,
    birthDay,
    firstName,
    lastName,
    gender,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
  const query = `update employees set last_name = ?, gender =? where  emp_no = ?`;
  const [rows] = await pool.query(query,[lastName,gender,empNo]);
  return rows;
}

export async function fireEmployee(empNo) {
  const query = `delete from employees where emp_no = ${empNo}`;
  const [rows] = await pool.query(query);
  return rows;
}
