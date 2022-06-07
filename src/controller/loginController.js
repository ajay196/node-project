const userDataModel = require('../models/userDataModel')
const {sucessHandler, errorHandler} = require('../shared/responseHandler')
module.exports = { createLogin, login}
async function createLogin(req, res, next){
    try{
        const userdata = await userDataModel.findOne({where: {email:req.body.email}})
        if(userdata){
            return res.send(errorHandler('user already exist'))
        }else{
            await userDataModel.create(req.body)
        return res.send(sucessHandler('user created successfully'))
        }
    }catch(err){
        return res.send(errorHandler('error in creating credential'))
    }
}

async function login(req, res, next){
    try{
        const userData = await userDataModel.findOne({where: {email: req.body.email}})
        console.log(userData)
        if(userData && (userData.password.toString() === req.body.password.toString())){
            return res.send(sucessHandler('logged in successfully'))
        }
        else{
            return res.send(errorHandler('incorrect username or password'))
        }
    }catch(err){
        return res.send(errorHandler('error in creating credential',err.message))
    }
}