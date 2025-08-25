const express=require('express');

const app=express();

app.use((req,res,next)=>{
  console.log("this is my first vlog",req.url);
  next();
})


app.use("/common",(req,res,next)=>{
  console.log("this is my name bock :- My name is mohit sankhyan");
  res.send("<h1>This is the first block of my name</h1>");
});

app.use((req,res)=>{
  console.log("this is my second block of my name is mohit sankhyan");
  res.send("<h1>This the second block of my name and my name is mohit sankhyan</h1>")
});

const port=4566;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});