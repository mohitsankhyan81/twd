const Data = require("../model/home");
const input=(req,res,next)=>{
  console.log("this is input page",req.body);
  res.render('input');
}

const succes=(req,res,next)=>{
  console.log("this is the fantsi page",req.body);
  const {houseName,price,location,rating,url}=req.body;
  const home= new Data(houseName,price,location,rating,url);
  home.save();
  res.render('succes');
}
const home=(req,res,next)=>{
  registerhouse=Data.fetchdata();
  res.render('home',{registerhouse:registerhouse});
}


exports.home=home;
exports.input=input;
exports.succes=succes;
