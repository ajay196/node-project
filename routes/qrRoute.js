var express = require('express');
var router = express.Router();
var {generateqr} = require('../src/controller/qrCode/qrcodeController')

/* GET users listing. */
router.get('/generate', generateqr);

module.exports = router;
