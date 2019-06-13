const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.on('message', message => {
  if (message.content.startsWith("r!")) {
    message.reply('Hey there! The prefix is `0` for this server, not `r!`!');
  }
});    

client.login(process.env.BOT_TOKEN);
