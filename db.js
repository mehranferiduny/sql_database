const sql=require('mysql2')

const pool=sql.createPool({
  host: 'localhost',
  user: 'root',
  password:'M3hr4nus',
  database: 'mysql',
}).promise();


const getCurser=async()=>{
  const [rusalt]=await pool.query('SELECT * FROM mehran.curses;')
  return rusalt;
}

getCurser().then((data)=>{
  console.log(data);
})
