const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you don't have permission!`
    );
  let newprefix = args[0];
  if (!newprefix)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you should mention a symbol!`
    );
  if (args[0] == "reset") {
    message.channel.send(
      `:tools: **| ${message.guild.name}** (**${message.guild.id}**) named server's prefix has been reset.`
    );
    db.delete(`guildprefix.${message.guild.id}`);
  } else {
    message.channel.send(
      `:tools: **| ${message.guild.name}** (**${message.guild.id}**) named server's prefix has been changed to **${newprefix}**`
    );
    db.set(`guildprefix.${message.guild.id}`, newprefix);
  }
};

exports.config = {
  name: "prefix",
  guildOnly: true,
  aliases: []
};
