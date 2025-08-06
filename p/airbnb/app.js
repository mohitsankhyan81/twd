const express=require('express');

const app=express();

app.use((req,res,next)=>{
  console.log(req.url,req.url);
  next();
})

app.use(express.urlencoded());

app.get("/",(req,res,next)=>{
  res.send(`<h1>Welcome to my home page</h1>
    <a href="/add-home">Add Home</a>`
  );
});

app.get("/add-home",(req,res,next)=>{
  res.send(`<h1>Register your home hear<br>we upload this on the internet<br>term and condition apply</h1>
    <form action="/add-home" method="POST">
      <input type="text" name="housename" placeholder="enter your house apparment"/>
      <input type="submit" />
    </form>`
  );
})

app.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  res.send(`<h1>This is the Fantastic page</h1>
    <a href="/">GO TO HOME</a>`
  );
})

const port=3001;
app.listen(port,()=>{
  console.log(`my server is run at http://localhost:${port}`);
})
