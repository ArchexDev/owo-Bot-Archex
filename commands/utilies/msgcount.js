const Discord = require("discord.js");
const msg = require("quick.db");

exports.run = async (client, message, args) => {
  let pre = await msg.fetch(`premiume.${message.guild.id}`);
  if (pre == false) {
    message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, this server is not premium!`
    );
  }
  if (pre == true) {
    let user = message.mentions.users.first() || message.author;
    let msgcount = msg.fetch(`msgcount.${message.guild.id}_${user.id}`);
    message.channel.send(
      `:tools: **| ${user.tag}**, you currently have **__${msgcount ||
        0}__ uwu messages** in this server!`
    );
  }
};

exports.config = {
  name: "messages",
  guildOnly: true,
  aliases: ["messagecount", "msgcount"]
};
