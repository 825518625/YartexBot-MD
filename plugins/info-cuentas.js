var handler = async (m, { conn, command }) => {

let str = `🚩 *CUENTAS*

⬡ *Github*
${md}

⬡ *Instagram*
${ig}

⬡ *YouTube*
${yt}

⬡ WhatsApp Bot
${linkwabot}`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnailUrl: imagen2, sourceUrl: channel, mediaType: 1, renderLargerThumbnail: true }}})
                    
}
handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i
handler.exp = 35
handler.register = true
export default handler
