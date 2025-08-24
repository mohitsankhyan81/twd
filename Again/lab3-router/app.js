const express=require('express');

const app=express();

app.use((req,res,next)=>{
  console.log('My name is mohit sankhyan');
  next();
});

app.use("/common",(req,res)=>{
  console.log("this is the first page");
  res.send("This is the firsy page");
});

app.use("/",(req,res)=>{
  console.log("this is the second page");
  res.send("this is the second page");
})

const port=4664;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})