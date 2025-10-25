const express=require('express');

const app=express();

const port=3454;

app.listen(port,()=>{
  console.log('Port is ',port);
})