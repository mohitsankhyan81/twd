const Data = require("../../model/home");

const homepage=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/homelist',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

const favlist=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/fav-list',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

const booking=(req,res,next)=>{
  res.render('store/booking');
}

const indexvalue=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/index',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}
exports.indexvalue=indexvalue;
exports.homepage=homepage;
exports.favlist=favlist;
exports.booking=booking;