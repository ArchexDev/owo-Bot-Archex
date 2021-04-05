const Discord = require("discord.js");
const bal = require("quick.db");
const conf = require("../../botconfig/config.json");
exports.run = async (client, message, args) => {
  if (
    message.author.id !== conf.owner1 &&
    message.author.id !== conf.owner2
  )
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you are not my developer!`
    );
  let prefix = "uwu ";
  let user = message.mentions.users.first();
  if (!user)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you should mention a user!`
    );
  let miktar = args[1];
  if (!miktar)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you should mention a number!`
    );
  message.channel.send(
    `:money_with_wings: **| ${miktar || 0}** money deleted to **${user.tag}**!`
  );
  bal.subtract(`usermoney.${user.id}`, miktar);
};

exports.config = {
  name: "del-cash",
  guildOnly: true,
  aliases: ["del-money", "del-bal", "del-balance"]
};
