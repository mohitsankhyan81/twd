const express=require('express');
const useRouter=express.Router();

useRouter.get("/",(req,res,next)=>{
  res.send(`<h1>Welcome to my home page</h1>
    <a href="/host/add-home">Add Home</a>`
  );
});

module.exports=useRouter;