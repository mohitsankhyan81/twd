const path=require('path');
const fs=require('fs');
const rootdir=require('../util/path');
const { homedir } = require('os');

class Data{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName,
    this.price=price,
    this.location=location,
    this.rating=rating,
    this.url=url
  }

  save(){
    Data.fetchdata(registerhouse=>{
      registerhouse.push(this);
      const homedata=path.join(rootdir,"data","home.json");
      fs.writeFile(homedata,JSON.stringify(registerhouse),error=>{
        console.log("no error",error);
      });
    })
  }
  static fetchdata(callback){
    const hoemdata=path.join(rootdir,"data","home.json");
    fs.readFile(hoemdata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }
}

module.exports=Data;