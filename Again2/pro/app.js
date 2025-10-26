const express=require('express');

const app=express();
const userRouter=require('./router/userrouter');
app.use((req,res,next)=>{
  console.log("There are all req ",req.url,req.headers,req.method);
  next();
})

app.use(userRouter);

const port=4534;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})