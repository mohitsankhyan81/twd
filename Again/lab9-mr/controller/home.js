const Data = require("../model/home");

const inputval=(req,res,next)=>{
  console.log("enter your data");
  res.render('input');
}

const sucess=(req,res,next)=>{
  console.log("home is regiater sucessfully",req.body);
  const {houseName,price,location,quantity,url}=req.body;
  const home=new Data(houseName,price,location,quantity,url);
  home.save();
  res.render('sucess');
}
const homeval=(req,res,next)=>{
  console.log("This is the home page");
  Data.fetchdata(registerhouses=>{
  res.render('home',{registerhouses:registerhouses});
  });
}

exports.inputval=inputval;
exports.sucess=sucess;
exports.homeval=homeval;