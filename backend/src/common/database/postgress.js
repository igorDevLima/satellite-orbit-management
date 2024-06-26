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
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
});

module.exports.dbQuery = (text, values) => {
  return pool.query(text, values);
};

module.exports.connect = () => {
  return pool.connect();
};
