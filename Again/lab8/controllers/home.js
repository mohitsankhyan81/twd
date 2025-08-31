const Home=require('../models/home');

const getAddhome=(req,res,next)=>{
  console.log('This is our router module');
  res.render('houseInfo',{pagetitle:'This is the 2 page'});
}
const registerHouse=[];
const getresult=(req,res,next)=>{
  console.log("This is the form submint section",req.body);
  const{houseName,price,location,rating,url}=req.body;
  const home=new Home(houseName,price,location,rating,url);
  home.save();
  res.render('house-go',{pagetitle:'this the done page'});
}
const user=(req,res,next)=>{
  Home.fetchAll((registerHouse)=>{
    res.render("home",{registerHouse:registerHouse,pagetitle:"airbnb",currentPage:"home"});
  })

}
const error=(req,res,next)=>{
  console.log("this is 404 page");
  res.status(404).render('404',{pagetitle:'my name is mohit'});
}
exports.user=user;
exports.getAddhome=getAddhome;
exports.getresult=getresult;
exports.error=error;
exports.registerHouse=registerHouse;
