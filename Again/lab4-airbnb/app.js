const express=require('express');
const bodyparser=require('body-parser')

const userRouter=require('./routes/userRouter');
const hostrouter = require('./routes/hostRouter');
const app=express();

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})

app.use(bodyparser.urlencoded());

app.use(userRouter);
app.use(hostrouter);


app.use((req,res,next)=>{
  res.status(404).send("<h1>404 Your page is not found on airbnb</h1>");
})

const port=2543;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})