var handler = async (m, { text,  usedPrefix, command }) => {


//conn.reply(m.chat, 'Zam', m, fake, )
  /*if (m.quotedMsg && m.quotedMsg.fromMe && m.quotedMsg.isForwarded && m.quotedMsg.forwardingScore !== undefined) {
 await conn.forwardMessage(m.chat, wm, {
      forwardingScore: m.quotedMsg.forwardingScore,
      isForwarded: true,
      externalAdReply: {
        title: 'Título del canal',
        body: 'Descripción del canal',
        sourceUrl: channel,
        thumbnailUrl: fotos,
      },
    })}*/
  await conn.reply(m.chat, '*Test*', { contextInfo:{ forwardingScore: 'https://whatsapp.com/channel/0029VaB4w2ZFHWpwgyEe3w2k/214', isForwarded: true, externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: global.ig, thumbnailUrl: fotos}}})
m.react('🚀') 

}
handler.command = ['ts']

handler.premium = false

export default handler
