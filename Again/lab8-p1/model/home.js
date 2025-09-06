const path=require('path');
const rootdir=require('../util/path');
const fs=require('fs');
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
    })
    });
  }
  static fetchdata(callback){
    const readfile=path.join(rootdir,"data","home.json");
    fs.readFile(readfile,(err,data)=>{
      callback(!err?JSON.parse(data):[])
    })
  }
}

module.exports = Data;