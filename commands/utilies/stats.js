const Discord = require("discord.js");
const moment = require("moment");
moment.locale("tr");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  let shardCount = "2";
  let bot = client.user;
  let user = message.author;
  let channel = message.channel;
  let guild = message.guild;
  let serversCount = client.guilds.cache.array().length;
  let membersCount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString();
  let channelsCount = client.channels.cache.array().length;
  let ping = client.ws.ping;
  let uptime = moment.duration(client.uptime).format("D [days], H [hours], m [minutes], s [seconds]");
  let prefix = "uwu ";
  let botstats = new Discord.MessageEmbed()
  .setAuthor(bot.username + " Information", bot.displayAvatarURL({dynamic:true}))
  .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${bot.id}&permissions=444480&scope=bot`)
  .setDescription(`Here's a little bit of information! If you need help with commands, type \`${prefix}help\`.`)
  .addField(`**Current Guild**`, `\`\`\`<userID: ${user.id}>\n<channel ID: ${channel.id}>\n<guild ID: ${guild.id}>\`\`\``)
  .addField(`**Bot Information**`, `\`\`\`<Guilds: ${serversCount}>\n<Channels: ${channelsCount}>\n<Users: ${membersCount}>\n<Shards: ${shardCount}>\n<Ping: ${ping}ms>\n<Uptime: ${uptime}>\n<New Update Date: 22 Mar 2021 19:45:50>\`\`\``)
  .setColor("BLUE")
  .setTimestamp();
  channel.send(botstats)
};

exports.config = {
  name: "stats", 
  guildOnly: true, 
  aliases: ["s"] 
};
