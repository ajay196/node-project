const jwt = require('jsonwebtoken')
const userDataModel = require('../../models/userDataModel')
const {sucessHandler, errorHandler} = require('../../shared/responseHandler')

module.exports ={createToken}

async function createToken(req, res, next) {
    try {
        console.log(process.env.JWTSECRETKEY)
        const userData = await userDataModel.findOne({
            attributes:['email'],
            where:{email:req.body.email}
        })
        console.log(userData.toJSON());
        const token = jwt.sign(userData.toJSON(), process.env.JWTSECRETKEY, {
            expiresIn: '99d',
        })
        return res.send(sucessHandler('token created', token))
    } catch(err){
        return res.send(errorHandler('error occure during token creation',err.message))
    }
}