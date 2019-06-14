const Discord = require('discord.js');
const client = new Discord.Client();
var version = '0.3'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith("r!")) {
message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('This server does not use `r!` for it\'s RoboTop prefix!','Please use `0` instead!')
                      .setTimestamp()
                      .setFooter(version + ' | Hi! I\'m a small helper for this server. If you\'d to know more, DM <@381862688298631168>')
  )}
  else if (message.content.startsWith("?")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('This server does not have Dyno!','Please use RoboTop or Rythm!')
                      .setTimestamp()
                      .setFooter(version + ' | Hi! I\'m a small helper for this server. If you\'d to know more, DM <@381862688298631168>')
  )}
  else if (message.content.startsWith("=")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('This server does not have Ayana!','Please use Rythm instead!')
                      .setTimestamp()
                      .setFooter(version + ' | Hi! I\'m a small helper for this server. If you\'d to know more, DM <@381862688298631168>')
  )}
  else if (message.content.startsWith("<@588772311931420672>")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('Hi! I\'m a small helper for this server.','If you\'d to know more, DM <@381862688298631168> or use `s!help`')
                      .setTimestamp()
                      .setFooter(version)
 )}
  else if (message.content === 's!help') {
          message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('Drumroll...','I have no commands yet besides this one. That\'s right! NONE!')
                      .setTimestamp()
 .setFooter(version + ' | Hi! I\'m a small helper for this server. If you\'d to know more, DM <@381862688298631168>')
)}
});

client.login(process.env.BOT_TOKEN);
