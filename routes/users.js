const {login,createUser,userList,getUserById} = require('../src/controller/userController') 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', login);
router.post('/create',createUser)
router.get('/get-user',userList)
router.get('/detail/:id',getUserById)
module.exports = router;
