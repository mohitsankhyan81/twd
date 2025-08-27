const express=require('express');

const path=require('path');

const bodyparser=require('body-parser');

const app=express();

const rootdir=require('./util/path')
const userRouter=require('./router/user');
const {contactRouter}=require('./router/contact-us');

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(rootdir,'public')));
app.use((req,res,next)=>{
  console.log("We will recive the requirst first",req.url,req.method);
  next();
});

app.use(bodyparser.urlencoded());

app.use(userRouter);
app.use(contactRouter)


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootdir,"views","404.html"));
})
const port=3254;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})