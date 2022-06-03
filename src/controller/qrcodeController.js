const res = require('express/lib/response')
const QRCode = require('qrcode')
async function generateqr(req,res) {
    let data = {
        name:"Employee Name",
        age:27,
        department:"Police",
        id:"aisuoiqu3234738jdhf100223"
    }
    let stringdata = JSON.stringify(data)
    const file =await  QRCode.toDataURL(stringdata)
    return res.send(file)
}

module.exports = {generateqr}