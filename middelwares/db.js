const sql=require('mysql2')
require('dotenv').config();

const pool=sql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password:process.env.PASSWORD,
  database: process.env.DATABASE,
}).promise();

const getCursers=async()=>{
  const [rusalt]=await pool.query('SELECT * FROM mehran.curses;')
  return rusalt;
}

const getCurser=async(id)=>{
  const [rusalt]=await pool.query
  ('SELECT * FROM mehran.curses WHERE ID=?  ',[id])
  return rusalt[0];
}

const insertCurser=async (Title)=>{
  const [rusalt]=await pool.query(`INSERT INTO mehran.curses (Title) VALUES (?)`,[Title]);
  return getCurser(rusalt.insertId);
};

const callStordeProcedure =async (id)=>{
  const [result] = await pool.query('call mehran.sd_select (?)',[id]);
  return result[0]
}

const updateCurser=async (id,Tilte)=>{
  const [rusalt]=await pool.query(`UPDATE mehran.curses SET Title=? WHERE id=?`,[Tilte,id]);
  return getCurser(id);
}

const deleteCurser=async (id)=>{
  await pool.query(`DELETE FROM mehran.curses WHERE id=?`,[id]);
  return id;
}

// getCursers().then((data)=>console.log(data));
// getCurser(2).then((data)=>console.log(data));
// insertCurser('go').then((data)=>console.log(data));
// updateCurser(8,'NodeJS').then((data)=>console.log(data));
// deleteCurser(9).then((data)=>console.log(data));
callStordeProcedure(6).then((data)=>console.log(data));
