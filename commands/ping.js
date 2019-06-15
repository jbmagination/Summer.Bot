exports.run = (client.message.args) => {
  message.channel.send(new Discord.RichEmbed()
.setColor('#29752f')
.addField('Pong!',new Date().getTime() - message.createdTimestamp + " ms")
.setTimestamp()
.setFooter(footer)
}

exports.help = {
  name: 'ping',
  desc: 'Tests to see if bot is working.'
}
