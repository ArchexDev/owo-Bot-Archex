let Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const conf = require("../botconfig/config.json");
const db = require("quick.db");
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  let prefix = db.fetch(`guildprefix.${message.guild.id}`);
  if (!message.content.startsWith(prefix)) return;
  let params = message.content.split(" ").slice(2);
  let command = message.content.split(" ")[1];
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
};
