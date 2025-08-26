const express=require('express');
const bodyparser=require('body-parser');

const path=require('path');
const userrouter=require('./router/userRouter');
const contactus=require('./router/contact-user');
const app=express();
const rootdir=require('./utill/pathutill');
app.use((req,res,next)=>{
  console.log("this is for reqest ",req.url,req.method);
  next();
})
app.use(bodyparser.urlencoded());

app.use(userrouter);
app.use(contactus);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootdir,"view","404.html"));
})
const post=4534;
app.listen(post,()=>{
  console.log(`http://localhost:${post}`);
});
