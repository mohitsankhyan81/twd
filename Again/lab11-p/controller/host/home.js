const Data = require("../../model/home");

const inputpage=(req,res,next)=>{
  console.log('This is our router module');
  res.render('host/houseInfo',{pagetitle:'This is the 2 page'});
}

const sucesspage=(req,res,next)=>{
  console.log("This is the form submint section",req.body,req.body.houseName);
  const {houseName,price,location,rating,url}=req.body;

  const home=new Data(houseName,price,location,rating,url);
  home.save();
  res.render('host/house-go',{pagetitle:'this the done page'});
}

const houseHost=(req,res,next)=>{
    Data.fetchdata(registerHouse=>{
  res.render('host/host-home-list',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

exports.inputpage=inputpage;
exports.sucesspage=sucesspage
exports.houseHost=houseHost;