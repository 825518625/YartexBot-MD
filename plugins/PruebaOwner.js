import fetch from 'node-fetch'
///import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

var handler = async (m, { text,  usedPrefix, command }) => {

//if (!text) return conn.reply(m.chat, `🎌 *Falta bing*`, m, fake, )

//let sexo = nanoid()

//  m.reply(sexo)
/*try {

c onn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://lookup.binlist.net/${text}`)
var res = await apii.json()
/*await m.reply(`${res.scheme} 
${res.type}
${res.brand} 
${res.alpha2} 
${res.numeric.name}
${res.emoji} 
${res.bank}`)
m.reply(apii)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )
}*/
conn.reply(m.chat, 'Zam', m, fake, )

}
handler.command = ['Ts']
//handler.help = ['']
//handler.tags = ['ai']

handler.premium = false

export default handler
