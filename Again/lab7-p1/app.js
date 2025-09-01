const express=require('express');

const app=express();

const userrouter=require('./router/userrouter');

const {hostrouter}=require('./router/hostrouter');

const rootdir=require('./util/path');

const path=require('path');

const bodyparser=require('body-parser');

app.set('view engine','ejs');

app.set('views','views');

app.use((req,res,next)=>{
  console.log("server files",req.url,req.method);
  next();
});

app.use(bodyparser.urlencoded());

app.use(userrouter);
app.use(hostrouter);


app.use((req,res,next)=>{
  console.log("Not found page");
  res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})
const port=3532;

app.listen(port,()=>{
  console.log(`server run at http://localhost:${port}`);
})