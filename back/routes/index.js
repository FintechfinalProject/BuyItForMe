import express from "express";
import * as MainController from "../controllers/main.controllers"

const router = express.Router();

router.get('/', (req, res) => {
    res.send('back data 보내기 성공')
})

router.post("/createUser",MainController.createUser)
router.get("/loginGet", MainController.loginClick)
router.get("/myInfo", MainController.myInfo)


export default router;