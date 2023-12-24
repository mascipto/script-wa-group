const fs = require('fs')

global.namabot = "Otpic Store"
global.namaowner = "Otpic Store"
global.footer_text = "©Otpic Store" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285647749567','6285647749567']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Halo Kak! selamat datang adakah yang bisa saya bantu?.
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

Selamat datang
untuk DAFTAR MENU 
silahkan ketik list, terimakasih sudah mampir


Mengalami kendala?
silahkan tanyakan ke Admin
━━━━━━━━━━━━━━━━━━━━━━━
`
}
