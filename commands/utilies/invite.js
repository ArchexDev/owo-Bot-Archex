const Discord = require("discord.js");
const conf = require("../../botconfig/config.json");

exports.run = async (client, message, args) => {
  let invitemsg = conf.invitemsg;
  this.message = invitemsg;
  let bot = client.user;
  let user = message.author;
  let channel = message.channel;
  let guild = message.guild;
  let botchannels = client.channels;
  let inviteurl = `https://discordapp.com/api/oauth2/authorize?client_id=${bot.id}&permissions=444480&scope=bot`;
  let color = "BLUE";
  this.inviteurl = inviteurl;
  this.user = user;
  this.bot = bot;
  this.guild = guild;
  this.channel = channel;
  this.channels = botchannels;
  this.color = color;
  let dc = new Discord.MessageEmbed()
  .setTitle(this.message)
  .setURL(this.inviteurl)
  .setColor(this.color);
  this.channel.send(dc);
};

exports.config = {
  name: "invite",
  guildOnly: true,
  aliases: ["invite-bot", "invitebot"]
};