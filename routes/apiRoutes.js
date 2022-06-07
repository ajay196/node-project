var express = require('express');
var router = express.Router();
const users = require('./usersRoute');
const qrRoutes = require('./qrRoute');
const loginRoute = require('./loginRoute');

router.use('/users', users)
router.use('/qr', qrRoutes)
router.use('/login',loginRoute)
module.exports = router