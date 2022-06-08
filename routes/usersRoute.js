const {login,createUser,userList,getUserById} = require('../src/controller/users/userController') 
const {createToken} = require('../src/controller/token/tokenController')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', login);
router.post('/create',createUser)
router.get('/get-user',userList)
router.get('/detail/:id',getUserById)
router.post('/token', createToken)
module.exports = router;
