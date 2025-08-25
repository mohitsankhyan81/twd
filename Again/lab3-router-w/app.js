const express=require('express');

const app=express();

app.use((req,res,next)=>{
  console.log("this is the first middleware",req.url,req.method);
  next();
})

app.use((req,res,next)=>{
  console.log("this is the second middleware",req.method,req.url);
  next();
})

// app.use((req,res,next)=>{
//   console.log("this is the third middleware",req.method,req.url);
//   res.send("<h1>This is the Third middle ware</h1>");
// })

app.get("/",(req,res)=>{
  console.log("Welcome to First page");
  res.send("<h1>This is the first page</h1>");
});

app.get("/contact-us",(req,res)=>{
  console.log("this is the /contact-us page");
  res.send(`
      <h1>This is the details form</h1>
      <form method="POST">
        <input type="text" placeholder="Enter your name">
        <input type="email" placeholder="Enter your email">
        <button type="submit">Submit</button>
      </form>
    `)
});

app.post("/contact-us",(req,res)=>{
  console.log("Thanks For your details we constact with you sortaly");
  res.send("<h1>Thanks for your details. We contact with you shortly</h1>");
})


const port=4545;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})