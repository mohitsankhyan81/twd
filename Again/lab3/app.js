const express=require('express');

const app=express();

app.use('/',(req,res)=>{
  console.log("app.is working");
});

const port=5436;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
