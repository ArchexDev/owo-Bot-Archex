const Discord = require("discord.js");
const conf = require("../../botconfig/config.json");

exports.run = async (client, message, args) => {
  let uwu = client.user;
  let prefix = "uwu ";
  let argm = args[0];
  if (!argm)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `Here is the list of commands!\nFor more info on a specific command, use \`${prefix}help {command}\`\nNeed more help? Come join our [guild](https://discord.gg/vN6JFKcVxc)\nCommands count: **${client.commands.size}**`
        )
        .setColor("BLUE")
        .addField(`:money_with_wings: **Economy**`, "`money`, `daily`, `coinflip`, `pray`, `give`")
        .addField(
          `:tools: **Moderation**`,
          "`ban`, `unban`, `kick`, `clear`, `prefix`"
        )
        .addField(`:books: **Utilies**`, "`messages`, `ping`, `avatar`, `report`, `snipe`, `stats`, `invite`")
        .addField(
          `<:staff:823538191763767297> **Developers**`,
          "`add-money`, `del-money`, `reset-money`, `premuim`"
        )
    .setFooter(`${uwu.username} | ${conf.footer}`, uwu.displayAvatarURL({dynamic:true})));
  if (argm == "money") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __money__**\n\nUsage: **${prefix}money <user>**\nCheck your/others money!`
        )
    );
  }
    if (argm == "ban") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __ban__**\n\nUsage: **${prefix}ban <user> <reason>**\nBan the person you specified from the server!`
        )
    );
  }
      if (argm == "daily") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __daily__**\n\nUsage: **${prefix}daily**\nYou get your daily reward!`
        )
    );
  }
  
        if (argm == "coinflip") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __coinflip__**\n\nUsage: **${prefix}coinflip <cash>**\nYou flip a coin!`
        )
    );
  }
  
          if (argm == "pray") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __pray__**\n\nUsage: **${prefix}pray**\nYou pray and get points!`
        )
    );
  }
  
            if (argm == "unban") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __unban__**\n\nUsage: **${prefix}unban <user_id>**\nYou remove the ban on a person on the server!`
        )
    );
  }
  
              if (argm == "kick") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __kick__**\n\nUsage: **${prefix}kick <user> <reason>**\nYou kick a person from the server!`
        )
    );
  }
  
                if (argm == "clear") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __clear__**\n\nUsage: **${prefix}clear <message_count>**\nDeletes as many messages as you specified!`
        )
    );
  }
  
                  if (argm == "messages") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __messages__**\n\nUsage: **${prefix}messages <user>**\nYou can check how many messages you've posted!`
        )
    );
  }
  
                    if (argm == "ping") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __ping__**\n\nUsage: **${prefix}ping**\nYou look at my ping!`
        )
    );
  }
  
                      if (argm == "avatar") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __avatar__**\n\nUsage: **${prefix}avatar <user>**\nYou look at your/others avatar!`
        )
    );
  }
  
                        if (argm == "report") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __report__**\n\nUsage: **${prefix}report <user> <reason>**\nYou report the person you specified for the reason you indicated!`
        )
    );
  }
  
                          if (argm == "snipe") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __snipe__**\n\nUsage: **${prefix}snipe**\nYou look at the last deleted message!`
        )
    );
  }
  
                            if (argm == "stats") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __stats__**\n\nUsage: **${prefix}stats**\nYou look at my stats!`
        )
    );
  }
                              if (argm == "invite") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __invite__**\n\nUsage: **${prefix}invite**\nYou look at my invite link!`
        )
    );
  }
  
                                if (argm == "give") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __give__**\n\nUsage: **${prefix}give <user> <number>**\nYou send as much uwu money to the person you specified!`
        )
    );
  }
  
                                  if (argm == "prefix") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __prefix__**\n\nUsage: **${prefix}prefix <symbol>**\nYou'll set a server specific prefix!`
        )
    );
  }
  
  if(argm == "add-money") {
      if (
    message.author.id !== conf.owner1 &&
    message.author.id !== conf.owner2
  )
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you are not my developer!`
    );
    
        message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __add-money__**\n\nUsage: **${prefix}add-money <user> <number>**\nAs much money as you specify is added to the person you specify!`
        )
    );
  }
  
    if(argm == "premium") {
      if (
    message.author.id !== conf.owner1 &&
    message.author.id !== conf.owner2
  )
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you are not my developer!`
    );
    
        message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __premium__**\n\nUsage: **${prefix}premium <serverid> <true or false>**\nIt activates the premium of the server ID you specified!`
        )
    );
  }
  
    if(argm == "del-money") {
      if (
    message.author.id !== conf.owner1 &&
    message.author.id !== conf.owner2
  )
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you are not my developer!`
    );
    
        message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __del-money__**\n\nUsage: **${prefix}del-money <user> <number>**\nAs much money as you specify is deleted to the person you specify!`
        )
    );
  }
  
    if(argm == "reset-money") {
      if (
    message.author.id !== conf.owner1 &&
    message.author.id !== conf.owner2
  )
    return message.channel.send(
      `:no_entry_sign: **| ${message.author.username}**, you are not my developer!`
    );
    
        message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Command: __reset-money__**\n\nUsage: **${prefix}reset-money <user>**\nResets the money of the person you specified!`
        )
    );
  }
  
};

exports.config = {
  name: "help",
  guildOnly: true,
  aliases: ["h"]
};
