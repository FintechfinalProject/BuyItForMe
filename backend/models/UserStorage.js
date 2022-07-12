// var express = require('express');
// var router = express.Router();
// 
// /* GET users listing. */
// router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
// });
// 
// module.exports = router;
"use script"

class UserStorage{
  static #users ={ //은닉화 ->undefind
    id:["123", "1234", "12345"],
    password: ["123", "1234", "12345"],
    name: ["정", "태", "환"]
  };
  
  static getUsers(...fields) {
    const users =  this.#users;
    const newUsers = fields.reduce((newUsers, field)=>{
      if (users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers
    },{})
    
    return newUsers
  }
}

  module.exports = UserStorage