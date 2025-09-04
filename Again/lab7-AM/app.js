const express=require('express');

const app=express();

const userrouter=require('./router/userrouter');
const {hostrouter} = require('./router/hostrouter');
const port=3252;

const path=require('path');
const  rootdir=require('./util/path');
const { error } = require('console');

const bodyparser=require('body-parser');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyparser.urlencoded());
app.use((req,res,next)=>{
  console.log("This is for all req ",req.url,req.method);
  next();
})

app.use(userrouter);
app.use(hostrouter);

app.use((req,res,next)=>{
  console.log(error);
  res.render('404');
})
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})