let handler = async (m, { conn, usedPrefix, command}) => {


let Reglas = `🎌 𝘙𝘦𝘴𝘱𝘦𝘵𝘢𝘳 𝘓𝘢𝘴 𝘙𝘦𝘨𝘭𝘢𝘴 𝘋𝘦𝘭 𝘉𝘰𝘵\n
1: 𝑵𝒐 𝑳𝒍𝒂𝒎𝒂𝒓 𝑨𝒍 𝑩𝒐𝒕!,
2: 𝑵𝒊𝒏𝒈𝒖𝒏 𝑴𝒐𝒕𝒊𝒗𝒐 𝑯𝒂𝒄𝒆𝒓𝒍𝒆 𝑺𝒑𝒂𝒎!,
3: 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒂 𝑨 𝑳𝒐𝒔 𝑪𝒓𝒆𝒂𝒅𝒐𝒓𝒆𝒔 𝑺𝒊 𝑬𝒔 𝑵𝒆𝒄𝒆𝒔𝒂𝒓𝒊𝒐!,
4: 𝑹𝒆𝒔𝒑𝒆𝒕𝒂 𝑳𝒐𝒔 𝑻𝒆𝒓𝒎𝒊𝒏𝒐𝒔 𝑫𝒆𝒍 𝑩𝒐𝒕!,
5: 𝑵𝒐 𝑰𝒏𝒔𝒖𝒍𝒕𝒆𝒔 𝑨𝒍 𝑩𝒐𝒕!,
6: 𝑷𝒆𝒅𝒊𝒓 𝑷𝒆𝒓𝒎𝒊𝒔𝒐 𝑷𝒂𝒓𝒂 𝑨𝒈𝒓𝒆𝒈𝒂𝒓 𝑬𝒍 𝑩𝒐𝒕 𝑨 𝑼𝒏 𝑮𝒓𝒖𝒑𝒐!.

🚩 𝐍𝐨𝐭𝐚: 𝖲𝗂 𝖭𝗈 𝖢𝗎𝗆𝗉𝗅𝖾𝗌 𝖢𝗈𝗇 𝖫𝖺 𝖱𝖾𝗀𝗅𝖺𝗌 𝖣𝖾𝗅 𝖡𝗈𝗍 𝖲𝖾𝗋𝖺𝗌 𝖡𝖺𝗇𝖾𝖺𝖽𝗈 𝖸 𝖡𝗅𝗈𝗊𝗎𝖾𝖺𝖽𝗈 𝖯𝗈𝗋 𝖢𝗎𝗋𝗂𝗈𝗂𝗌𝗍𝗒𝖡𝗈𝗍-𝖬𝖣.

𝑆𝑖 𝑇𝑒 𝐺𝑢𝑠𝑡𝑎 𝐸𝑙 𝐵𝑜𝑡 𝐶𝑢𝑟𝑖𝑜𝑠𝑖𝑡𝑦, 𝑇𝑎𝑚𝑏𝑖𝑒𝑛 𝑃𝑢𝑒𝑑𝑒𝑠 𝐼𝑟 𝐴𝑙 𝑅𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑖𝑜 𝑌 𝐷𝑒𝑗𝑎𝑟 𝑇𝑢 𝐸𝑠𝑡𝑟𝑒𝑙𝑙𝑎 ✨

https://github.com/AzamiJs/CurioistyBot-MD`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}