const userDataModel = require('../../models/userDataModel')
const { sucessHandler, errorHandler } = require('../../shared/responseHandler')
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = { createLogin, login, gettingAllLogin }
async function createLogin(req, res, next) {
    try {
        const userdata = await userDataModel.findOne({ where: { email: req.body.email } })
        if (userdata) {
            return res.send(errorHandler('user already exist'))
        } else {
            const hash = bcrypt.hashSync(req.body.password, saltRounds)
            req.body.password =hash
            await userDataModel.create(req.body)
            return res.send(sucessHandler('user created successfully'))
        }
    } catch (err) {
        return res.send(errorHandler('error in creating credential'))
    }
}

async function login(req, res, next) {
    try {
        const userData = await userDataModel.findOne({ where: { email: req.body.email } })
        if (userData && bcrypt.compareSync(req.body.password.toString(), userData.password.toString())) {
            return res.send(sucessHandler('logged in successfully'))
        }
        else {
            return res.send(errorHandler('incorrect username or password'))
        }
    } catch (err) {
        return res.send(errorHandler('error in creating credential', err.message))
    }
}

async function gettingAllLogin(req, res, next) {
    try{
        const loginData = await userDataModel.findAll()
    return res.send(loginData)
    }
    catch(err){
        return res.send(errorHandler('error',err.message))
    }
}