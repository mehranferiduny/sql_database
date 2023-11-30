const ModelData=require('../models/m-data')

exports.getCuersers=async(req,res)=>{

  try {

    const data=await ModelData.getCursers();
    if(!data) console.log('no data');
       
    res.send(data)

    
  } catch (err) {
    console.log(err);
  }


}

exports.getCuerser=async(req,res)=>{

  try {
    const data=await ModelData.getCurser(req.params._id);
    if(!data) console.log('no data');
       
    res.send(data)

    
  } catch (err) {
    console.log(err);
  }


}
exports.insertCuerser=async(req,res)=>{

  try {
        const {title}=req.body;

        if(!title)console.log("Required title");
        if(title.length <= 3) console.log("title minimum is 3 the character");
        if(title.length >= 50) console.log("title maximum is 50 the character");

        await ModelData.insertCurser(title)
        res.status(200).send("OK")
    
  } catch (err) {
    console.log(err);
  }


}
exports.updateCuerser=async(req,res)=>{

  try {
 
        const {title}=req.body;

        if(!title)console.log("Required title");
        if(title.length <= 3) console.log("title minimum is 3 the character");
        if(title.length >= 50) console.log("title maximum is 50 the character");
        if(!req.params._id) console.log('data is notfund');

       const data= await ModelData.getCurser(req.params._id);
       
       if(!data) console.log('data whit id notfund');

        await ModelData.updateCurser(data.id,title);
        res.status(200).send("OK update cuerser")
    
  } catch (err) {
    console.log(err);
  }


}
exports.deleteCuerser=async(req,res)=>{

  try {
 
        if(!req.params._id) console.log('data is notfund');

       const data= await ModelData.getCurser(req.params._id);
       
       if(!data) console.log('data whit id notfund');

        await ModelData.deleteCurser(data.id)
        res.status(200).send("OK delete cuerser")
    
  } catch (err) {
    console.log(err);
  }


}
exports.callStordeProcedure=async(req,res)=>{

  try {
 
        if(!req.params._id) console.log('id is notfund');

       const data= await ModelData.getCurser(req.params._id);
       
       if(!data) console.log('data whit id notfund');

       const cuerser= await ModelData.callStordeProcedure(data.id)
        res.status(200).send(cuerser)
    
  } catch (err) {
    console.log(err);
  }


}