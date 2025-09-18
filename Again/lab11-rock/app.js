const express=require('express');

const app=express();

const path=require('path');

const rootdir=require('./util/home');

const storerouter=require('./router/storerouter');
const {hostrouter}=require('./router/hostrouter');


app.use(express.static(path.join(rootdir,"public")));
app.set('view engine','ejs');
app.set('views','views');
const bodyparser=require('body-parser');

app.use((req,res,next)=>{
  console.log("this is for all the req",req.url,req.method);
  next();
})

app.use(bodyparser.urlencoded());
app.use(storerouter);
app.use(hostrouter);


app.use((req,res,next)=>{
  console.log("Your page is not found");
  res.render('error');
})
const port=4535;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})