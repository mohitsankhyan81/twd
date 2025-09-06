const express=require('express');

const path=require('path');

const userRouter=require('./router/userrouter');

const {hostrouter}=require('./router/hostrouter');

const app=express();

const rootdir=require('./utill/path')

const bodyparser=require('body-parser')

const {error}=require('./controllers/error');

app.set('view engine','ejs');

app.set('views','views');

app.use(express.static(path.join(rootdir,'public')));

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})

app.use(bodyparser.urlencoded());

app.use(userRouter);

app.use(hostrouter);

app.use(error);

const port=3535;

app.listen(port,()=>{
  console.log(`port is http://localhost:${port}`);
})