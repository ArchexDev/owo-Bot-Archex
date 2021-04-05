const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you don't have permission!`
    );
  let miktar = args[0];
  if(miktar > 100) {
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, I can't delete more than 100 messages!`
    )
  }
  
    if(miktar < 1) {
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, I can't delete less than 1 messages!`
    )
  }
  if (!miktar)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you should mention a number!`
    );
    message.channel.bulkDelete(miktar).catch(e => message.channel.send(`:no_entry_sign: **| ${message.author.username}**, I cannot delete messages older than 14 days!`));
  message.channel.send(
    `:white_check_mark: **| ${miktar}** messages deleted from <#${message.channel.id}>!`
  );
  message.delete();
};

exports.config = {
  name: "clear", 
  guildOnly: true, 
  aliases: ["del-message", "clearmessage", "clearmessages", "clear-message"] 
};
