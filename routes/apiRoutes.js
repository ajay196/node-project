var express = require('express');
var router = express.Router();
const users = require('./users');
const qrRoutes = require('./qr');

router.use('/users', users)
router.use('/qr', qrRoutes)
module.exports = router