const Data = require("../model/home");

const input=(req,res,next)=>{
  console.log("Register your home");
  res.render('input');
}

const sucess=(req,res,next)=>{
  console.log("Your form is registered",req.body);
  const {houseName,price,location,rating,url}=req.body;
  const home=new Data(houseName,price,location,rating,url);
  home.save();
  res.render('sucess');
}

const home=(req,res,next)=>{
  console.log("this is our home page");
  Data.fetchall(registerhouse=>{
  res.render('home',{registerhouse:registerhouse});
  });
}

exports.input=input;
exports.sucess=sucess;
exports.home=home;