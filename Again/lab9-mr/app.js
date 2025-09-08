const express=require('express');

const app=express();

const userrouter=require('./router/userrouter')

const {hostrouter}=require('./router/hostrouter');

const bodyparser=require('body-parser');
const { error } = require('./controller/error');

app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
  console.log("all req",req.url,req.method);
  next();
})

app.use(bodyparser.urlencoded());
app.use(userrouter);
app.use(hostrouter);

app.use(error);
const port=3254;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})