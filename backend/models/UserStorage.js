"use script"

class UserStorage{
  static #users ={ //은닉화 ->undefind
    id:["123", "1234", "12345"],
    password: ["123", "1234", "12345"],
    name: ["정", "태", "환"],
    account:[],
    bank:[],
    birth:[],
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

  static getUserInfo(id) {
    const users =  this.#users;
    const idx = users.id.indexOf(id)
    const userKeys = Object.keys(users);//키값만 받아서 배열로 만듬 => [id, password, name]
    const userInfo = userKeys.reduce((newUser, info)=>{
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo
  }
  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.birth.push(userInfo.birth);
    users.password.push(userInfo.password);
    users.bank.push(userInfo.bank);
    users.account.push(userInfo.account);
    // console.log(users);
    return { success : true };
  

  }
}

  module.exports = UserStorage