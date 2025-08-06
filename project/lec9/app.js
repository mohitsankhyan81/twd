const express = require('express');
const app = express();

app.get("/", (req, res) => {
  console.log("GET / route", req.url, req.method);
  res.send("<h1>Welcome to Chitkara University</h1>");
});

app.get("/contact-us", (req, res) => {
  console.log("GET /contact-us route", req.url, req.method);
  res.send(`
    <h1>I love Chitkara University</h1>
    <form action="/contact-us" method="POST">
      <input type='text' name="name" placeholder='Enter your name'/>
      <input type='text' name='email' placeholder='Enter your email'/>
      <input type='submit'/>
    </form>
  `);
});

app.post("/contact-us",(req,res,next)=>{
  console.log("handling const for post",req.url,req.method);
  res.send("We Will contact with you shortly")
})

const port = 3002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
