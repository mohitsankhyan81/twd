const Data = require("../model/home");
const sucess=(req,res,next)=>{
  console.log("registered sucessfully",req.body);
  const {houseName,price,location,rating,url}=req.body;
  const home=new Data(houseName,price,location,rating,url);
  home.save();
  // registeredhouse.push(req.body);
  res.render('sucess');
}

const input=(req,res,next)=>{
  console.log("Enter your house details");
  res.render('input');
}

const homeval=(req,res,next)=>{
  Data.fetchdata(registeredhouse=>{
      console.log("This is the home page");
  res.render('home',{registeredhouse:registeredhouse});
  });
}

exports.sucess=sucess;
exports.input=input;
exports.homeval=homeval;
