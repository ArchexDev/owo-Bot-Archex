const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.channel.send(`:no_entry_sign: **| ${message.author.username}**, you should mention a user!`);
    if (message.author === user) {
    message.channel.send(`:no_entry_sign: **| ${message.author.username}**, you can't pay uwu money to yourself!`);

    return;
  }
    let amount = args[1];
    if(!user) return message.channel.send(`:no_entry_sign: **| ${message.author.username}**, you should mention a number!`);
    message.channel.send(`:credit_card: | **${message.author.username}** sent **${amount} uwu money** to **${user.username}**!`)
  db.add(`usermoney.${user.id}`, amount);
  db.add(`usermoney.${message.author.id}`, -amount);
};

exports.config = {
  name: "give",
  guildOnly: true,
  aliases: ["send", "pay"]
};
