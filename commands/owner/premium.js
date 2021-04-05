const db = require("quick.db");
const Discord = require("discord.js");
const moment = require("moment");
const conf = require("../../botconfig/config.json");

exports.run = async (client, message, args) => {
  if (message.author.id !== conf.owner1 && message.author.id !== conf.owner2)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you are not my developer!`
    );
  let serverid = args[0];
  let status = args[1];
  if (!serverid)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you should mention a server id!`
    );
  if (!status)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, missing arguments: **true** or **false**!`
    );
  if (status === "true") {
    message.channel.send(
      `:white_check_mark: **| ${message.author.username}**, **${
        client.guilds.cache.get(serverid).name
      }** server's premium actived!`
    );
    db.set(`premiume.${serverid}`, true);
  }
  if (status === "false") {
    message.channel.send(
      `:white_check_mark: **| ${message.author.username}**, **${
        client.guilds.cache.get(serverid).name
      }** server's premium de-actived!`
    );
    db.set(`premiume.${serverid}`, false);
  }
};

exports.config = {
  name: "premium",
  guildOnly: true,
  aliases: ["pree", "preee", "pre"]
};
