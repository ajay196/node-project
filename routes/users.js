const {login} = require('../controller/userController') 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', login);

module.exports = router;
