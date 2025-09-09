const express=require('express');

const app=express();

const path=require('path');

const rootdir=require('./util/path');
const userRouter=require('./router/userRouter');
const hostrouter=require('./router/hostRouter');

const bodyparser=require('body-parser');
const { errorpage } = require('./controller/error');


app.use(express.static(path.join(rootdir,"public")));

app.set("view engine",'ejs');
app.set('views','views');
app.use((req,res,next)=>{
  console.log("All req",req.method,req.url);
  next();
})
app.use(bodyparser.urlencoded());
app.use(userRouter);
app.use(hostrouter);

app.use(errorpage);


const port=3543;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})