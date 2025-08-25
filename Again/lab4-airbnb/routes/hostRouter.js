const express=require('express');

const hostrouter=express.Router();

hostrouter.get("/host/add-home",(req,res,next)=>{
res.send(`
  <h1>register your home hear</h1>
  <form action="/host/add-home" method="post">
    <input type="text" name="houseName" placeholder="Enter the name of your house">
    <input type="submit">
  </form>
  `)
})

hostrouter.post("/host/add-home",(req,res)=>{
  console.log("your data is ",req.body)
  res.send(`<h1>We will contact you shortlly</h1>
    <a href="/">Go Back</a>`)
})

module.exports=hostrouter;