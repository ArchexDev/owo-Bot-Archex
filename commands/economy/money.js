const Discord = require("discord.js");
const bal = require("quick.db");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let cash = bal.fetch(`usermoney.${user.id}`);
  message.channel.send(`:money_with_wings: **| ${user.tag}**, you currently have __**${cash ||
          0}**__ **uwu money**!`
      );
};

exports.config = {
  name: "cash",
  guildOnly: true,
  aliases: ["money", "bal", "balance"]
};
