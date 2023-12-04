const postgres = require('postgres');

const sql = postgres({
  host: '172.18.0.2',
  port: 5432,
  database: 'hw2db',
  username: 'postgres',
  password: 'xyz789'
});

module.exports = sql;