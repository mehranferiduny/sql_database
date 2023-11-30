const sql=require('mysql2')
require('dotenv').config();

const pool=sql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password:process.env.PASSWORD,
  database: process.env.DATABASE,
}).promise();

module.exports=pool;