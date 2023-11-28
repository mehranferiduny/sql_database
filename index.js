const express=require('express');
const {pool}=require('./db')

const app=express();

app.use(express.json());

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`run server in port : ${PORT}`);
})