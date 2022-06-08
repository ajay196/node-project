const express = require('express');
var router = express.Router();
const {createLogin, login, gettingAllLogin} = require('../src/controller/login/loginController')

router.post('/signup',createLogin)
router.post('/signin', login)
router.get('/get-all',gettingAllLogin)

module.exports = router