const express=require('express');

const app=express();

app.use((req,res,next)=>{
  console.log("this is the first middleware",req.url,req.method);
  next();
})

app.use((req,res,next)=>{
  console.log("this is the second middle ware",req.url,req.method);
  next();
})
// app.use((req,res,next)=>{
//   console.log("this is the third middleware",req.url,req.method);
//   res.send("<h1>Welxome to Third middleware</h1>")
// })

app.get("/",(req,res)=>{
  console.log("this is the / path");
  res.send("This is the fist page middleware");
});

app.get("/contact-us",(req,res)=>{
  console.log("This is the /contact us middle ware");
  res.send(`
   <form method="POST">
    <input type="text" id="fname" name="fname" placeholder="Enter your first name"> 
    <input type="email" id="email" name="email" placeholder="Enter your Email id">
    <input type="submit" value="Submit">
  </form>
    `);
});

app.post("/contact-us",(req,res)=>{
  console.log("handling req for post",req.url,req.method);
  res.send("Thanks for your details");
});

const port=2535;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})

