const express=require('express');

const app=express();

const userrouter=require('./router/userRouter')

const {hostrouter}=require('./router/hostRouter')

const path=require('path');

const rootdir=require('./util/path');

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded());

app.set('view engine','ejs');

app.set('views','views');

app.use((req,res,next)=>{
  console.log("this is the reqs pannel");
  next();
});

app.use(userrouter);

app.use(hostrouter);

app.use((req,res,next)=>{
  console.log("Error accors");
  res.status(404).render('404');
})
const port=3531;

app.listen(port,(req,res,next)=>{
  console.log(`http://localhost:${port}`);
})