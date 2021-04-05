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
  message.channel.send(`:money_with_wings: **| ${user.tag}**'s moneys reset!`);
  bal.delete(`usermoney.${user.id}`);
};

exports.config = {
  name: "reset-cash",
  guildOnly: true,
  aliases: ["reset-money", "reset-bal", "reset-balance"]
};
