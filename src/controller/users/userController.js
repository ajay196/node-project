const userModel = require('../../models/userModel')
const {db} = require('../../models/index')
const {sucessHandler, errorHandler} = require('../../shared/responseHandler')
async function login(req, res, next) {
  const otpObj= {
    mobile:'',
    otp: Math.floor(Math.random() * 1000000).toString(),
    newuser:''
  }
  const user =await userModel.find({where:{mobile:req.body.name}})
  if(user){
    otpObj.newuser = '0'
   return res.send(sucessHandler('otp generated sucessfully'))
  }else{
   return res.send(errorHandler('user not found'))
  }
  }

  async function createUser(req, res, next){
    const body = req.body
    try{
      const response = await userModel.create(body)
    return res.send(sucessHandler('user created sucessfully',response))
    }
    catch (err) {
      return res.send(errorHandler('error ', err))
    }
  }

  async function getUserById(req, res, next){
    try{
      const id = req.params.id
      const response = await userModel.findByPk(id)
    return res.send(sucessHandler('user detail fetch sucessfully',response))
    }
    catch (err) {
      return res.send(errorHandler('error ', err))
    }
  }

  async function userList(req, res, next){
    try{
      const userData = await userModel.findAndCountAll()
    return res.send(sucessHandler('user list',userData))
    }catch (err) {
      return res.send(err)
    }
  }
module.exports ={login,createUser,userList,getUserById}