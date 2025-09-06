const registeredHouse=[];
const path=require('path');
const rootdir=require('../utill/path');
const fs=require('fs');

class Home{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName,
    this.price=price,
    this.location=location,
    this.rating=rating,
    this.url=url
  }

  save(){
    Home.fetchAll(registeredHouse=>{
    registeredHouse.push(this);
    const homedata=path.join(rootdir,'data','home.json');
    fs.writeFile(homedata,JSON.stringify(registeredHouse),error=>{
      console.log("No erorr",error);
    })
    });
  }

  static fetchAll(callback){
    const homedata=path.join(rootdir,'data','home.json');
    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }

};

module.exports=Home;