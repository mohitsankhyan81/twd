const Home=require('../models/home');

const home = (req,res,next) => {
Home.fetchAll((registeredHouse)=>{
res.render('home',{registeredHouse:registeredHouse,pageTitle:'this is the home page'});
})
}

const input=(req,res,next)=>{
  console.log('this is our add home page')
  res.render('addhome',{pageTitle:'Enter your details'});
}

const post=(req,res,next)=>{
  console.log('This is the uploded page');
  const { houseName, price, location, rating, url } = req.body;
  const home = new Home(houseName, price, location, rating, url);
  home.save(); 
  res.render('homeposted',{pageTitle:'Uploded'})
}

exports.post=post;

exports.input=input;

exports.home=home;