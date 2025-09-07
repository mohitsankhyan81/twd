const express=require('express');;

const app=express();

const path=require('path');

const rootdir=require('./util/path');

const bodyparser=require('body-parser');

const userrouter=require('./router/userouter');
const {hostrouter} = require('./router/hostrouter');
const { errorval } = require('./controller/error');

app.set('view engine','ejs');
app.set('views','views');
app.use((req,res,next)=>{
  console.log("here is all the request",req.url,req.method);
  next();
});

app.use(bodyparser.urlencoded());

app.use(userrouter);
app.use(hostrouter);

app.use(errorval)
const port=3534;

app.listen(port,(req,res,next)=>{
  console.log(`http://localhost:${port}`);
});
