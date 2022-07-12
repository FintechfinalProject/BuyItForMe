"use strict";

// const { application, json } = require("express");

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    account = document.querySelector("#account"),
    bank = document.querySelector("#bank"),
    name = document.querySelector("#name"),
    birth = document.querySelector("#birth"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)//register은 함수-> 함수 설정 해야함

function register(){
    const req = {
        id: id.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
        account : account.value,
        bank : bank.value,
        name : name.value,
        birth : birth.value,
    };
    // console.log(req)

    fetch("/register", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),//JSON 형태로 바디 안에 데이터를 넣어서 전달
    })                            //mainController.js로 id/password(req) 전달?
    .then((res) => res.json())    //success데이터 받아서 띄움?
    .then((res) => {              //HTML의 로그인 정보를 서버로 던짐 API?
        if (res.success){
            location.href="/login";
        }else{
            alert(res.msg)
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"));//에러를 띄움
    })
};

//프론트의 HTML과 연결된 javascript
console.log(id);