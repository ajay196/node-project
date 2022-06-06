const {login,createUser,userList} = require('../src/controller/userController') 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', login);
router.post('/create',createUser)
router.get('/get-user',userList)
module.exports = router;
