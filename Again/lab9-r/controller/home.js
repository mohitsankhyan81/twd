const Data = require("../model/home");

const input=(req,res,next)=>{
  console.log("Register your home");
  res.render('host/input');
}

const sucess=(req,res,next)=>{
  console.log("Your form is registered",req.body);
  const {houseName,price,location,rating,url}=req.body;
  const home=new Data(houseName,price,location,rating,url);
  home.save();
  res.render('host/sucess');
}

const home=(req,res,next)=>{
  console.log("this is our home page");
  Data.fetchall(registerhouse=>{
  res.render('store/homelist',{registerhouse:registerhouse});
  });
}
const booking=(req,res,next)=>{
  res.render('store/booking');
}

const getfavlist=(req,res,next)=>{
  Data.fetchall(registerhouse=>{
  res.render('store/fav-list',{registerhouse:registerhouse});
  });
}

const index=(req,res,next)=>{
  console.log("this is our home page");
  Data.fetchall(registerhouse=>{
  res.render('store/index',{registerhouse:registerhouse});
  });
}

exports.index=index;
exports.getfavlist=getfavlist;
exports.booking=booking;
exports.input=input;
exports.sucess=sucess;
exports.home=home;