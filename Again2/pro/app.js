const express=require('express');

const app=express();
const userRouter=require('./router/userrouter');
const {hostrouter}=require('./router/hostrouter');

const bodyparser=require('body-parser');

app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
  console.log("There are all req ");
  next();
})

app.use(bodyparser.urlencoded());
app.use(userRouter);
app.use(hostrouter);
const port=4534;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})