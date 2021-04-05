const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you don't have permission!`
    );

  let prefix = "uwu ";
  let banned = message.mentions.users.first() || client.users.resolve(args[0]);
  let reason = args.slice(1).join(" ");

  if (!banned) {
    message.channel.send(`:no_entry_sign: **| ${message.author.username}**, you should mention a member!`);

    return;
  }
  if (message.author === banned) {
    let sanctionyourselfembed = new Discord.MessageEmbed()
      .setDescription(`:x: **| You can't ban yourself!**`)
      .setColor("RED");
    message.channel.send(`:no_entry_sign: **| ${message.author.username}**, you can't ban yourself!`);

    return;
  }

  message.guild.members.ban(banned, { reason: reason });
  message.channel.send(`:tools: **| ${banned.tag}** was banned by **${
        message.author.tag
      }**, reason: **${reason || "Reason is not specified"}**!`
    )
  message.delete();
};

exports.config = {
  name: "ban",
  guildOnly: true,
  aliases: []
};
