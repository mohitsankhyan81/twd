const Data=require("../model/home");
const input=(req,res,next)=>{
  console.log("This is the home page",res.body);
  res.render('input',{pageTitle:'input page'});
}
const postinput=(req,res,next)=>{
  console.log("this is the post completed",req.body);
  const {houseName,price,location,rating,url}=req.body;
  const home=new Data(houseName,price,location,rating,url);
  home.save();
  res.render('completed',{pageTitle:'sucessful'});
}
const home=(req,res,next)=>{
  console.log('this is home page');
  const registerhouse=Data.fetchdata();
  res.render('home',{registerhouse:registerhouse});
}

exports.input=input;
exports.home=home;
exports.postinput=postinput;
