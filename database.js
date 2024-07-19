const Pool  = require("pg").Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'salim1705',
  host: 'localhost',
  port: 5432,
  database: 'db_express'
});

module.exports = pool;