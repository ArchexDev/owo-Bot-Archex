const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you don't have permission!`
    );
  let prefix = "uwu ";
  let unbanned = args[0];
  let ban = await message.guild.fetchBans();
  if (!unbanned) {
    message.channel.send(`:no_entry_sign: **| ${message.author.username}**, mention the ID of the person to be unbanned!`);

    return;
  }
  if (!ban.get(unbanned)) {
    message.channel.send(`:no_entry_sign: **| ${message.author.username}**, This user is not already banned`);

    return;
  }

  var user = ban.get(ban.id);
  message.guild.members.unban(unbanned);
  message.channel.send(
    `:tools: **| ${unbanned}**, the ban of the user with the ID has been lifted, unbanned by **${message.author.username}**`
  );
  message.delete();
};

exports.config = {
  name: "unban",
  guildOnly: true, 
  aliases: [] 
};
