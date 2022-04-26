async function login(req, res, next) {
  const otpObj= {
    mobile:'',
    otp: Math.floor(Math.random() * 1000000).toString(),
    newuser:''
  }
  const user =await userModel.find({where:{mobile:req.body.mobile}})
  if(user){
    otpObj.newuser = '1'
    res.send(otpObj)
  }else{
    otpObj.newuser = '0'
    res.send(otpObj)
  }
  }

module.exports ={login}