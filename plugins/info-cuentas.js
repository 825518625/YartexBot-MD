var handler = async (m, { conn, command }) => {

let str = `🚩 *CUENTAS*

⬡ *Github*
${md}

⬡ *Instagram*
${ig}

⬡ *YouTube*
${yt}

⬡ *WhatsApp Bot*
${linkwabot}

⬡ *Email*
${email}`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
                    
}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i

handler.register = true

export default handler
