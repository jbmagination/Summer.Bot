exports.run = async (bot, message, args) => {
  message.channel.send(new Discord.RichEmbed()
              .setColor('#29752f')
              .addField('s!help','Opens help/commands menu')
              .addField('s!ping','Tests to see if bot is working')
              .setTimestamp()
              .setFooter(footer)
                  )
}

exports.help = {
  name: "help",
  desc: "Displays a list of commands."
}
