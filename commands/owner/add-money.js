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
    `:money_with_wings: **| ${miktar || 0}** money added to **${user.tag}**!`
  );
  bal.add(`usermoney.${user.id}`, miktar);
};

exports.config = {
  name: "add-cash",
  guildOnly: true,
  aliases: ["add-money", "add-bal", "add-balance"]
};
