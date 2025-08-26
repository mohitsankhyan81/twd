const express=require('express');

const bodyParser=require('body-parser');

const userRouter=require('./router/userRouter');
const hostrouter=require('./router/hostRouter');
const app=express();

const rootdir=require("./util/pathutill");

app.use(bodyParser.urlencoded());
app.use((req,res,next)=>{
  console.log("airbnd req",req.url,req.method);
  next();
})

app.use(userRouter);
app.use(hostrouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootdir,"view","404.html"))
})

const post=3256;

app.listen(post,()=>{
  console.log(`http://localhost:${post}`);
})
