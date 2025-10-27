const express=require('express');

const app=express();

const bodyparser=require('body-parser');
app.use((req,res,next)=>{
  // console.log("Here all the reqs",req.headers,req.url);
  next();
});

const userrouter=require('./router/userrouter');
const {hostrouter}=require('./router/hostrouter');

app.set("view engine","ejs");
app.set("views","views");
app.use(bodyparser.urlencoded());
app.use(userrouter);
app.use(hostrouter);
const port=4565;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})