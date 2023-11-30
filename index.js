const express=require('express');


const app=express();

app.use(express.json());


app.use('/',require('./routers/home'))

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`run server in port : ${PORT}`);
})