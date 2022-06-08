const res = require('express/lib/response')
const QRCode = require('qrcode')
async function generateqr(req,res) {
    let data = {
        name:"Ajay kumar Singh",
        age:24,
        designation:"Software Developer"
    }
    let stringdata = JSON.stringify(data)
    const file =await  QRCode.toDataURL(stringdata)
    const qrImage = `<!DOCTYPE html>
    <html>
    <body>
    <img src="${file}" alt="ajay_qr">
    </body>
    </html>`
    return res.send(qrImage)
}

module.exports = {generateqr}