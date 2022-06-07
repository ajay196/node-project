const express = require('express');
var router = express.Router();
const {createLogin, login} = require('../src/controller/loginController')

router.post('/create-login',createLogin)
router.post('/login-verify', login)

module.exports = router