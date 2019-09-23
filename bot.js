const Discord = require('discord.js');
const client = new Discord.Client();
var version = '0.12.1'
var catchphrase = 'Harro! s!help'
var footer = version + ' | ' + catchphrase
client.on('ready', () => {
  let statuses = [
    `https://www.twitch.tv/princessnatsumihimawari`,
    `https://www.twitch.tv/jbmagination`,
    `a small ${client.users.size} users!`,
    `just ${client.guilds.size} server!`,
    `you type in this server`,
    `a sunflower`,
    `you read these status messages`,
    `Discord`,
    `@JBMagination#5512 code me`,
    `you click to read this extended status message`,
    `\${status_message}`,
    `Steven Universe`,
    `Shane Dawson's videos`,
    `and pleading for you to boost the server`,
    ` `,
    `anime`,
    `the Nintendo Direct`,
    `the other bots plead to be at my glory`,
  ];
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`you find the elusive launch message. Congratulations!`, { type: 'WATCHING', status: 'online' });
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, { type: 'WATCHING', status: 'online' });
  }, 20000);

});

client.on('message', message => {
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
                      .addField('This server does not have Dyno!','Please use RoboTop. Mee 6, or Rythm!')
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
  else if (message.content === 's!harro') {
    message.channel.send(new Discord.RichEmbed()
                      .setColor('#29752f')
                      .addField('Harro! I\'m a special helper for this server, the Sunforest Ally!','If you\'d to know more, DM <@381862688298631168> or use `s!help` for a list of commands.')
                      .setTimestamp()
                      .setFooter(version)
 )}
  else if (message.content === 's!quote') {
    let quote = [
      `"When did we get so many children?!" -Summer`,
      `"Ketchup is a fruit!" -Lala"`,
      `"Ketchup is a smoothie!" -Lala`
  ];
    let quotes = quote[Math.floor(Math.random() * quote.length)];
    message.channel.send(quotes);
} else if (message.content.startsWith("s!")) {
    if (message.content === 's!help') {
            message.channel.send(new Discord.RichEmbed()
                        .setColor('#29752f')
                        .addField('s!help','Opens help/commands menu')
                        .addField('s!ping','Tests to see if bot is working')
                        .addField('s!pong','Uhh... **PRETEND YOU NEVER SAW THIS**')
                        .addField('s!harro','Say harro to me!')
                        .addField('s!quote','Says a random quote related to the server or people in it')
                        .addField('s!ocials','See what I did there? See Summer and JBM\'s socials!')
                        .addField('s!credits','See the people who made it all happen :heart:')
                        .setTimestamp()
   .setFooter(footer)
  )}
  else if (message.content === 's!ping') {
      message.channel.send(new Discord.RichEmbed()
    .setColor('#29752f')
    .addField('Pong!',new Date().getTime() - message.createdTimestamp + " ms")
    .setTimestamp()
    .setFooter(footer)
  )} else if (message.content === 's!pong') {
      message.channel.send(new Discord.RichEmbed()
    .setColor('#29752f')
    .addField('Ping!',"-" + new Date().getTime() - message.createdTimestamp + " ms")
    .setTimestamp()
    .setFooter('wait why is the ping negati-- s!help | ' + version)
  )} else if (message.content === 's!credits') {
      message.channel.send(new Discord.RichEmbed()
    .setColor('#29752f')
    .addField('Credits:', '_ _')
    .addField('SummerSunflower','For creating the server :yellow_heart:')
    .addField('JBMagination','For creating me :green_heart:')
    .addField('Uncloudless','For creating Summer and I\'s avatar :sparkling_heart:')
    .addField('Mii26','For testing the bot :blue_heart:')
    .addField('Lavender','For testing the bot :black_heart:')
    .addField('Choose2Smile','For being alive and indirectly helping with quotes :purple_heart:')
    .addField('You','For reading this and being a part of Summer\'s server. :heart:')
    .setTimestamp()
    .setFooter("we really do love you <3 s!help | " + version)
  )} else if (message.content === 's!ocials') {
     message.channel.send(new Discord.RichEmbed()
    .setColor('#29752f')
    .addField('Summer\'s Socials:', '_ _')
    .addField('Instagram','https://instagram.com/princesssummersunflower')
    .addField('Instagram','https://www.instagram.com/summersunflowerphotography/')
    .addField('Twitch','https://www.twitch.tv/princessnatsumihimawari')
    .addField('YouTube','https://www.youtube.com/channel/UCqJNDZysOBBHYjtvDQK-Aog')
    .addField('Twitter','https://twitter.com/SummerSun501')
    .addBlankField()
    .addField('JBM\'s Socials:', '_ _')
    .addField('YouTube','https://bit.ly/Sub2JBM')
    .addField('Twitch','https://twitch.tv/jbmagination')
    .addField('Twitter','https://twitter.com/jbmagination')
    .addField('DLive','https://dlive.tv/jbmagination')
    .addField('Mixer','https://mixer.com/jbmagination')
    .addField('Website','https://jbmagination.com')
    .setTimestamp()
    .setFooter("wait why can't i get a social :( s!help | " + version)
  )} else message.channel.send(new Discord.RichEmbed()
                .setColor('#29752f')
                .addField('Sorry, I don\'t recognize that command!','Type `s!help` for a list of commands.')
                .setTimestamp()
                .setFooter(footer)
              )}
            });

client.login(process.env.BOT_TOKEN);
