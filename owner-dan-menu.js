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

━━━━━━[ DAFTAR MENU ]━━━━━━

- NETFLIX
- CANVA
- NETFLIX HARIAN
- DISNEY SHAR 10U
- DISNEY
- YOUTUBE
- WETV
- VIU
- BSTATION
- PRIME
- IQIYI
- CAPCUT
- WPS
- VPN
- GRAMMARLY
- CANVA OWNER
- HBO
- LOKLOK
- LR
- VISION+
- MINECRAFT
- POU
- TURNITIN
- PAPAGAME
- AM
- ZOOM
- VSCO
- VIDIO DIAMOND
- APPLEMUSIC
- VIDIO
- FREE CANVA
- VIKI
- REMINI
- TEZZA
- PREQUEL
- GAGAOLALA
- TIKTOKMUSIC
- CATCHPLAY
- SCRIBD
- CONVERT SALDO
- FOLLS IG
- MEITU
- APPS EDITING IOS
- MS365
- WATTPAD
- YOUKU
- DRAKORID
- DAZZCAM
- GENFLIX
- SUSHIROLL
- IFLIX
- APPLEKODE
- SPOTIFY
- GTC
- PICSART
- PROMO
━━━━━━━━━━━━━━━━━━━━━━━
HAPPY SHOPING
-OTPIC STORE-
━━━━━━━━━━━━━━━━━━━━━━━
`
}
