const express = require('express');
const router = express.Router();
const ctrl = require("../controller/mainController");


/* GET home page. */
router.get('/', ctrl.output.main);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/cart', ctrl.output.cart);
router.get('/product', ctrl.output.product);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
// javascrips/login.js에서 사용되는 서버


// 서버라고 생각하면 됨
module.exports = router;
