const exprss=require('express');

const app=exprss();

app.use((req,res,next)=>{
  console.log('welcome to out code',req.url);
  res.send('My name is mohit sankhyan');
  next();
});

app.use((req,res,next)=>{
  console.log("here i say hello world",req.url);
  res.send("<h1>My name is your name</h1>");
  next();
})


app.listen(4534,()=>{
  console.log(`http://localhost:4534`);
})