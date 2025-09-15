const express=require('express');


const path=require('path');
const rootdir=require('./util/path');
const app=express();

const storerouter=require('./router/storerouter');
const hostrouter=require('./router/hostrouter')

app.set('view engine','ejs');
app.set('views','views');
const bodyparser=require('body-parser');
app.use((req,res,next)=>{
  console.log("This is the first page",req.url,req.method);
  next();
})

app.use(bodyparser.urlencoded());
app.use(storerouter);
app.use(hostrouter);

app.use((req,res,next)=>{
  console.log("This page is not found");
  res.render('error');
})
const port=4525;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})