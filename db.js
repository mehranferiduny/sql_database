const sql=require('mysql2')

const pool=sql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mysql',
})


module.exports={pool}