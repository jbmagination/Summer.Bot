const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
var version = '0.6'
var catchphrase = 'Harro! s!help'
var footer = version + ' | ' + catchphrase
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
let messageArray = message.conent.split(" ")
let cmd = messageArray[0];
let args = messageArray.slice(1);
let prefix = 's!'
let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice((prefix.length)))
// fs.readdir("./commands/", (err, files) => {
//  if(err) console.log(err);
//  let jsfile = files.filter(f => f.split(".").pop === "js")
//  if(jsfile.length <= 0) {
//    return console.log("Couldn't find commands");
//  }

//  jsfile.forEach((f, i) => {
//    let pull = require(`./commands/${f}`);
//    client.commands.set(pull.config.name, pull);
//    pull.config.aliases.forEach(alias => {
//      client.aliases.set(alias, pull.config.name)
//    });
//  });
//});
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Harro! | s!help", {type: "STREAMING", url: "https://www.twitch.tv/summersunflower"});
});

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    message.channel.send(new Discord.RichEmbed()
    .setColor('#29752f')
    .addField('You can\'t use this bot in DM\'s!','Head back to Sunforest Ally and use commands there!')
    .setTimestamp()
    .setFooter(footer)
  }
  if (message.content.startsWith("r!")) {
message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('This server does not use `r!` for it\'s RoboTop prefix!','Please use `0` instead!')
                      .setTimestamp()
                      .setFooter(footer)
  )}
  else if (message.content.startsWith("?")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('This server does not have Dyno!','Please use RoboTop or Rythm!')
                      .setTimestamp()
                      .setFooter(footer)
  )}
  else if (message.content.startsWith("=")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('This server does not have Ayana!','Please use Rythm instead!')
                      .setTimestamp()
                      .setFooter(footer)
  )}
  else if (message.content.startsWith("<@588772311931420672>")) {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('Harro! I\'m a special helper for this server, the Sunforest Ally!','If you\'d to know more, DM <@381862688298631168> or use `s!help` for a list of commands.')
                      .setTimestamp()
                      .setFooter(version)
 )}
  else if (message.content.startsWith("s!")) {
    if (message.content === 's!help') {
            message.channel.send(new Discord.RichEmbed()
                        .setColor('#29752f')
                        .addField('s!help','Opens help/commands menu')
                        .addField('s!ping','Tests to see if bot is working')
                        .setTimestamp()
                        .setFooter(footer)
                      )}
  else if (message.content === 's!ping') {
      message.channel.send(new Discord.RichEmbed()
    .setColor('#29752f')
    .addField('Pong!',new Date().getTime() - message.createdTimestamp + " ms")
    .setTimestamp()
    .setFooter(footer)
  )} else message.channel.send(new Discord.RichEmbed()
                .setColor('#29752f')
                .addField('Sorry, I don\'t recognize that command!','Type `s!help` for a list of commands.')
                .setTimestamp()
                .setFooter(footer)
              )}
            });

client.login(process.env.BOT_TOKEN);
