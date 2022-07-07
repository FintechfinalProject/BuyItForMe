import express from "express";
import router from "./routes/index.js"
import cors from "cors"
// import axios from "axios"

const app = express();

// axios.post("http://localhost:3500/",)

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(router)

app.listen(3500,console.log("server listening to http://localhost:3500"))