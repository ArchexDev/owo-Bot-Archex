const Discord = require("discord.js");
const data = require("quick.db");
exports.run = async (client, message, args) => {
    let pre = await data.fetch(`premiume.${message.guild.id}`);
  if(pre == false) {
    message.channel.send(`:no_entry_sign: **| ${message.author.username}**, this server is not premium!`)
  }
  if(pre == true) {
    const uwu = await data.fetch(`snipe.id.${message.guild.id}`);
    if (!uwu) {
      let kullanıcı = client.users.cache.get(uwu);
      message.channel.send(`:no_entry_sign: **| ${message.author.username}**, the last deleted message was not found!`);
    }
    if(uwu) {
      let kullanıcı = client.users.cache.get(uwu);
      const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`);
      message.channel.send(`:hammer: **| ${message.author.usernamusername}**, the person who deleted the message: **${kullanıcı.tag}**, deleted message: **${silinen}**`);
    }
  }
};

exports.config = {
  name: "snipe", 
  guildOnly: true, 
  aliases: ["messagesnipe"] 
};
