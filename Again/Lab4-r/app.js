const express=require('express');
const bodyparser=require('body-parser');


const app=express();


app.use((req,res,next)=>{
  console.log("this is the fist middleware");
  next();
});

app.use((req,res,next)=>{
  console.log("this is the second middleware");
  next();
})


// app.use((req,res,next)=>{
//   console.log("this is the third and main middleware");
//   res.send("<h1>This is the third and main middleware</h1>");
// })


app.get("/",(req,res)=>{
  console.log("this is the welcome page");
  res.send("<h1>Welcome to home page</h1>")
})


app.get("/contact-us",(req,res)=>{
  console.log("enter your details hear");
  res.send(`
    <h1>Enter your details hear</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="username" placeholder="Enter your name hear">
    <input type="email" name="Email" placeholder="Enter your email hear">
    <button type="submit">Submit</button>
    </form>
    `)
})



app.use((req,res,next)=>{
  console.log("this is the post data in terminal");
  next();
})



app.use(bodyparser.urlencoded());


app.post("/contact-us",(req,res)=>{
  console.log("We will contact with you after some time",req.body);
  res.send("<h1>We will connect to you shortly</h1>");
})


const port=5634;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});