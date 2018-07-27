const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Rameez1qwer',
  port: 5432,
})


module.exports = pool;
