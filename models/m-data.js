const pool=require('../utils/pool_mysql')


class ModelMydata{
  static getCursers=async()=>{
    const [rusalt]=await pool.query('SELECT * FROM mehran.curses;')
    return rusalt;
  }
  
  static getCurser=async(id)=>{
    const [rusalt]=await pool.query
    ('SELECT * FROM mehran.curses WHERE ID=?  ',[id])
    return rusalt[0];
  }
  
  static insertCurser=async (Title)=>{
    const [rusalt]=await pool.query(`INSERT INTO mehran.curses (Title) VALUES (?)`,[Title]);
  };
  
  static callStordeProcedure =async (id)=>{
    const [result] = await pool.query('call mehran.sd_select (?)',[id]);
    return result[0]
  }
  
  static updateCurser=async (id,Tilte)=>{
    const [rusalt]=await pool.query(`UPDATE mehran.curses SET Title=? WHERE id=?`,[Tilte,id]);
  }
  
  static deleteCurser=async (id)=>{
    await pool.query(`DELETE FROM mehran.curses WHERE id=?`,[id]);
    return id;
  }


}

module.exports=ModelMydata;