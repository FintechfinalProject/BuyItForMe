const express = require('express');
const router = express.Router();
const ctrl = require("../controller/mainController");
/* GET home page. */
router.get('/', ctrl.main)

router.get('/login', ctrl.login)

module.exports = router;
