const Pool = require("pg-pool");

const port = process.env.POSTGRES_PORT || 5432;
const database = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

const pool = new Pool({
  database: database,
  user: user,
  port: port,
  password: password,
  host: "localhost",
});

module.exports = pool;
