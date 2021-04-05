const Discord = require("discord.js");
const conf = require("../../botconfig/config.json");

exports.run = async (client, message, args) => {
  let reportchannel = conf.reportlog; //your server report's channel id
  let reportuser = message.mentions.users.first();
  if (!reportuser)
    return message.channel.send(
      `:no_entry_sign: **|** Silly **${message.author.username}**, you need to add a user!`
    );
  let reason = args.slice(1).join(" ");
  if (!reason)
    return message.channel.send(
      `:no_entry_sign: **|** Silly **${message.author.username}**, you need to add a message!`
    );
  message.channel.send(`:incoming_envelope: | _UwU What's this?!  ${message.author.username}, Thanks for the report, it has been sent to bot staff!_`)
  if (
    client.channels.cache
      .get(reportchannel)
      .send(
        `:tools: **| ${reportuser.tag}** (**${reportuser.id}**) was reported by **${message.author.tag}**, reason: **${reason}**`
      )
  );
};

exports.config = {
  name: "report",
  guildOnly: true,
  aliases: ["report-user", "reportuser"]
};
