const jwt = require('jsonwebtoken')
const userModel =  require('../models/userModel')

async function createToken(req, res, next) {
 const userData = await userModel.findByPk(id)
}