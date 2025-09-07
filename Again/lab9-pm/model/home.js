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
    Data.fetchdata(registeredhouse=>{
      registeredhouse.push(this);
      const homedata=path.join(rootdir,'data','data.json');
      fs.writeFile(homedata,JSON.stringify(registeredhouse),error=>{
        console.log("no error",error);
      });
    });

  }

  static fetchdata(callback){
    const homedata=path.join(rootdir,'data','data.json');
    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }
}

module.exports=Data;