const path=require('path');
const rootdir=require('../util/home');
const fs=require('fs');
const facdatapath=path.join(rootdir,'data','fav.json');

class Fav{
 static addtofav(homeid,callback){
  Fav.getfav(favhouses=>{
    if(favhouses.includes(homeid)){
      callback("Home is already marked favourites");
    }
    else{
      favhouses.push(homeid);
      fs.writeFile(facdatapath,JSON.stringify(favhouses),callback);
    }
  })
 }

 static getfav(callback){
  fs.readFile(facdatapath,(err,data)=>{
    callback(!err?JSON.parse(data):[]);
  })
 }
}

module.exports=Fav;
