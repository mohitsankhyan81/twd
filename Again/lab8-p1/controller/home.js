const Data  = require("../model/home");
const input=(req,res,next)=>{
  console.log('This is input page');
  res.render('input',{pageTitle:'homepage'});
};

const sucess=(req,res,next)=>{
  console.log('this is sucess page',req.body);
  const {houseName,price,location,rating,url}=req.body;
  const home=new Data(houseName,price,location,rating,url);
  home.save();
  res.render('sucess');
}

const home=(req,res,next)=>{
  console.log("This is our home page");
  Data.fetchdata(registerhouse=>{
  res.render('home',{registerhouse:registerhouse})
  });
}

exports.input=input;
exports.sucess=sucess;
exports.home=home;