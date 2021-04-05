const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let useravatar = new Discord.MessageEmbed()
    .setTitle(user.tag)
    .setDescription(`\`Nickname: ${user.username}\`\n\`ID: ${user.id}\``)
    .setImage(user.displayAvatarURL({ dynamic: true }))
    .setColor("BLUE");
  message.channel.send(useravatar);
};

exports.config = {
  name: "avatar",
  guildOnly: true,
  aliases: ["pp", "pfp"]
};
