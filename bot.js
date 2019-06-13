const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith("r!")) {
    message.reply('the prefix is `0` for this server, not `r!`!');
  };
  else (if (message.content.startsWith("?")) {
    message.reply('this server does not have Dyno! Please use RoboTop or Rythm!');
  };
  else (if (message.content.startsWith("=")) {
    message.reply('this server does not have Ayana! Please use Rythm instead!');
  };
});    

client.login(process.env.BOT_TOKEN);
