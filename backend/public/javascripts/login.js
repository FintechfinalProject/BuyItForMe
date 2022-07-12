"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login)//login은 함수-> 함수 설정 해야함

function login(){
    const req = {
        id: id.value,
        password : password.value,
    };

    console.log(req);
};

console.log(id);