import axios from "axios";
import pool from "../db.js"

export const getBlock = async (req,res) => {
    const result = await axios.get("http://localhost:3001") //API
    res.json(result.data.reverse())
}

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
