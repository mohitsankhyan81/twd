const express=require('express');

const app=express();

const path=require('path');

const rootdir=require('./util/path');

const bodyparser=require('body-parser');

const storerouter=require('./router/storerouter');
const {hostrouter}=require('./router/hostrouter');
const { errorval } = require('./controller/error');

app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
  console.log("all the req",req.url,req.method);
  next();
})

app.use(bodyparser.urlencoded());
app.use(storerouter);
app.use(hostrouter);


app.use(errorval);

const port=2352;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});