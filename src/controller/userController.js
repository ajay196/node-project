// const userModel = require('../model/userModel')
// const db = require('../model/index')
async function login(req, res, next) {
//  const x = await db.sequelize.query('SELECT * FROM pg_stat_activity;')
//  console.log(x);
  // await userModel.create({firstName:'ajay',lastName:'singh'})
  const otpObj= {
    mobile:'',
    otp: Math.floor(Math.random() * 1000000).toString(),
    newuser:''
  }
  // const user =await userModel.find({where:{mobile:req.body.mobile}})
  if(false){
    otpObj.newuser = '0'
   return res.send(otpObj)
  }else{
    otpObj.newuser = '1'
   return res.send(otpObj)
  }
  }

module.exports ={login}