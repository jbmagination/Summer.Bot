const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith("r!")) {
    message.reply('the prefix is `0` for this server, not `r!`!');
  }
  else if (message.content.startsWith("?")) {
    message.reply('this server does not have Dyno! Please use RoboTop or Rythm!');
  }
  else if (message.content.startsWith("=")) {
    message.reply('this server does not have Ayana! Please use Rythm instead!');
  }
  else if (message.content === '<@588772311931420672>') {
    message.channel.send(new Discord.RichEmbed()
                      .setTitle('Sunforest Ally')
                      .setDescription('Summer Bot')
                      .setColor('#29752f')
                      .addField('Hi! I am a small helper for the Sunforest Ally.')
                      .addBlankField()
                      .setTimestamp()
                      .setFooter('v0.2')
);
  }
});    

client.login(process.env.BOT_TOKEN);
