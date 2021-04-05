const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you don't have permission!`
    );
  let reason = args.slice(1).join(" ");
  const user = message.mentions.users.first();
  if (!user)
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you should mention a user!`
    );
  // If we have a user mentioned
  if (user) {
    // Now we get the member from the user
    const member = message.guild.members.resolve(user);

    if (member) {
      member.kick(`${reason || "Reason is not specified!"}`).then(() => {
        // We let the message author know we were able to kick the person
        message.channel.send(`:tools: **| ${user.tag}** was banned by **${
        message.author.tag
      }**, reason: **${reason || "Reason is not specified"}**!`
    );
      });
    }
  }
};

exports.config = {
  name: "kick", 
  guildOnly: true, 
  aliases: [] 
};
