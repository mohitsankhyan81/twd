const fs=require('fs');
const path=require('path');
const rootdir=require('../util/path');


class Home{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName
    this.price=price
    this.location=location
    this.rating=rating
    this.url=url
  }
  save(){
    Home.fetchAll(registerHouse=>{
    registerHouse.push(this)
    const homedata=path.join(rootdir,'data','homes.json');
    fs.writeFile(homedata,JSON.stringify(registerHouse),error=>{
      console.log('no error',error);
    })
    })
  }
  static fetchAll(callback){
    const homedata=path.join(rootdir,'data','homes.json');
    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    });
  }
}

module.exports=Home
