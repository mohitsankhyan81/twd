const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use((req,res,next)=>{
  console.log("this is the first middleware");
  next();
})

app.use((req,res,next)=>{
  console.log("This is the secont middleware");
  next();
})
// hello1
// app.use((req,res,next)=>{
//   console.log("this is the third middleware");
//   res.send("<h1>This is the third middleware</h1>");
// })

app.get("/",(req,res)=>{
  console.log("Welcome to the Home page");
  res.send("<h1>Welcome to the Home page</h1>")
})

app.get("/contact-us",(req,res)=>{
  console.log("This is the contact information page");
  res.send(`
    <h1>Enter your details hear</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter Your name">
      <input type="email" name="email" placeholder="Enter Your email">
      <button type="submit">Submit</button>
    </form>
    `)
})

app.use((req,res,next)=>{
  console.log("this is the use of contact info");
  next();
})


app.use(bodyparser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("We will contact with you shortly",req.method,req.body,req.url);
  res.send("<h1>We Will contact with you shortly</h1>");
})

const post=4534;
app.listen(post,()=>{
  console.log(`http://localhost:${post}`);
});
