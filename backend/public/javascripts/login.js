"use strict";

// const { application, json } = require("express");

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login)//login은 함수-> 함수 설정 해야함

function login(){
    const req = {
        id: id.value,
        password : password.value,
    };

    fetch("/login", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),//JSON 형태로 바디 안에 데이터를 넣어서 전달
    })                            //mainController.js로 id/password(req) 전달?
    .then((res) => res.json())    //success데이터 받아서 띄움?
    .then((res) => {              //HTML의 로그인 정보를 서버로 던짐 API?
        if (res.success){
            location.href="/";
        }else{
            alert(res.msg)
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));//에러를 띄움
    })
    
};

//프론트의 HTML과 연결된 javascript
console.log(id);