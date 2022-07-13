const express = require("express");
const app = express();
const queryString = require('query-string');
const mysql = require("mysql2");
const axios = require("axios");

const port = 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

// 사용자 인증
app.get("/api/token", (req, res) => {
  const parsedCode = req.query.code;
  console.log("parsedCode는", parsedCode)
  const data = {
    code: parsedCode,
    client_id: "df1a2d43-fa75-4bd9-822d-f03c71d1943d",
    client_secret: "1ed0d5df-2cca-41fc-ae4f-9737217615a6",
    redirect_uri: "http://localhost:3300/api/token",
    grant_type: "authorization_code",
  };

  console.log("data", data);
  const sendData = queryString.stringify(data);
  console.log("sendData는", sendData)

  const option = {
    method: "POST",
    url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: sendData,
  };

  axios(option)
    .then(({ data }) => {
      const access_token = data.access_token;
      const user_seq_no = data.user_seq_no;
      console.log("DB에 들어가는", access_token, user_seq_no);
      const sql = "INSERT INTO buyitforme.user (access_token, user_seq_no) VALUES (?, ?)";
      connection.query(sql, [access_token, user_seq_no], (err, result) => {
        if (err) {
          console.error(err);
          throw err;
        }
        else {
          console.log(result);
        }
      });
      res.redirect(`http://localhost:3000/authResult`)
    })
    .catch(err => console.log(err))
});


// 계좌정보 불러오기
app.get("/api/payment", (req, res) => {
  const sql = "SELECT * FROM buyitforme.user LIMIT 1"
  connection.query(sql, [], (err, result) => {
    console.log("SQL result는?", result);
    res.send(result);
  })

  const accessToken = result.access_token
  const userSeqNo = result.user_seq_no
  console.log("sql가져온 값이 초기화되었는가", accessToken, userSeqNo)
  const option = {
    method: "GET",
    url: `/v2.0/user/me`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      user_seq_no: userSeqNo,
    },
  };
  axios(option).then(({ data }) => {
    console.log("data는 acooutList", data);
    res.send(data.res_list[0])
  });
})

app.listen(port, () => {
  console.log(`server listening to http://localhost:${port}`);
});