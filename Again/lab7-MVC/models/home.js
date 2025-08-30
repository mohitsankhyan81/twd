const registerHouse=[];

module.exports=class Home{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName;
    this.price=price;
    this.location-location;
    this.rating=rating;
    this.url=url;
  }
  save(){
    registerHouse.push(this);
  }
  static fetchall(){
    return registerHouse;
  }
}