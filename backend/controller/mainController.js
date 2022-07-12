"use strict"

const User = require("../models/User");
// import axios from "axios";
// import pool from "../models/db.js"


//home에 있는 ejs파일 읽어오기
const output = {
    main : (req, res) =>{
        res.render("home/index")
    },
    
    login : (req, res)=>{
        res.render('home/login');
    },
    register : (req,res)=>{
        res.render("home/register")
    }
}


const process ={
    login: async (req, res) =>{
        const user = new User(req.body);//User.js의 body로 넘어감
        const response = await user.login();
        // console.log(response);
        return res.json(response);
    },
    register: (req, res)=>{
        const user = new User(req.body);//User.js의 body로 넘어감
        const response = user.register();
        return res.json(response);
    }
};
//백엔드라 볼 수 있음




module.exports = {
    output,
    process,
};












// export const getBlock = async (req,res) => {
//     const result = await axios.get("http://localhost:3001") //API
//     res.json(result.data.reverse())
// }

// export const mineBlock = async (req,res) => {
    // const {} = req.body;
    // const mResult = await axios.post("http://localhost:3010/mBlock",{})
    // const {} = mResult.data;
    // const vars = []

    // try {
    //     const sql = "INSERT INTO blocks() VALUES(?,?,?,?,?,?,?,?);"
    //     const [result] = await pool.query(sql,vars);
    // }
    // catch (e) {
    //     throw e;
    // }

    // try {
    //     const sql = `UPDATE  SET  WHERE address = ;`
    //     const [result] = await pool.query(sql,vars);
    // }
    // catch (e) {
    //     throw e;
    // }

    // res.send(mResult.data)
// }