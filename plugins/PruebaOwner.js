import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *Falta bing*`, m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://lookup.binlist.net/${text}`)
var res = await apii.json()
/*await m.reply(`${res.scheme} 
${res.type}
${res.brand} 
${res.alpha2} 
${res.numeric.name}
${res.emoji} 
${res.bank}`)*/
m.reply(res)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )
}

}
handler.command = ['bin']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler
