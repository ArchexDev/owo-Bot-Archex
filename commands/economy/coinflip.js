const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (client, message, args) => {
  let para = db.fetch(`usermoney.${message.author.id}`);

  let timeout = 10000;

  let crime = await db.fetch(`bahisoynama_${message.author.id}`);

  if (crime !== null && timeout - (Date.now() - crime) > 0) {
    let time = ms(timeout - (Date.now() - crime));
    message.channel.send(
      `:stopwatch: **| ${message.author.username}**! Please wait **${
        time.seconds ? time.seconds + "s** and try again!" : ""
      }`
    );
  } else {
    var miktar = args[0];
    if (!miktar)
      return message.channel.send(
        `:no_entry_sign: **| ${message.author.username}**, Invalid arguments!!`
      );
    if (miktar > 100000)
      return message.channel.send(
        `:no_entry_sign: **| ${message.author.username}**, you can bet up to __100000__!`
      );
    if (para == "0") {
      return message.channel.send(
        `:no_entry_sign: **| ${message.author.username}**, you don't have enough uwu money!`
      );
    }
    
      if (miktar > para) {
      return message.channel.send(
        `:no_entry_sign: **| ${message.author.username}**, you don't have enough uwu money!`
      );
    }
    if (miktar == "all") {
      return message.channel.send(
        `:no_entry_sign: **| ${message.author.username}**, \`all\` is not supported!`
      );
    }
    const result = ["WINWIN", "LOOSELOOSE"];
    let awnser = result[Math.floor(Math.random() * result.length)];
    if (awnser === "LOOSELOOSE") {
      var kaybettin = miktar;
      message.channel
        .send(
          `**${message.author.username}** spent :money_with_wings: **100** and chose **heads**\nThe coin spins... <a:uWU:823550187422089216>`
        )
        .then(x => {
          x.edit(
            `**${message.author.username}** spent :money_with_wings: **${miktar}** and chose **heads**\nThe coin spins... <:tail:823557407404851210> and you lost it all... :c`
          );
        }, 1238123921932132131313812392193213213131232121);
      await db.set(`bahisoynama_${message.author.id}`, Date.now());
      await db.add(`usermoney.${message.author.id}`, -kaybettin);
      await db.subtract(`usermoney.${message.author.id}`, miktar);
    } else {
      var kazandın = miktar * 2;
      message.channel
        .send(
          `**${message.author.username}** spent :money_with_wings: **100** and chose **heads**\nThe coin spins... <a:uWU:823550187422089216>`
        )
        .then(x => {
          x.edit(
            `**${
              message.author.username
            }** spent :money_with_wings: **${miktar ||
              0}** and chose **heads**\nThe coin spins... <:head:823557996604948571> and you won :money_with_wings: **${kazandın ||
              0}**!!`
          );
        }, 12381239219321321313123212112222222222222222222222222222222222222222222222222);
      await db.set(`bahisoynama_${message.author.id}`, Date.now());
      await db.add(`usermoney.${message.author.id}`, kazandın);
      await db.subtract(`usermoney.${message.author.id}`, miktar);
    }
    if (miktar == "all") {
      var kazandın = 100000 * 2;
      message.channel
        .send(
          `**${message.author.username}** spent :money_with_wings: **100000** and chose **heads**\nThe coin spins... <a:uWU:823550187422089216>`
        )
        .then(x => {
          x.edit(
            `**${
              message.author.username
            }** spent :money_with_wings: **100000** and chose **heads**\nThe coin spins... <:head:823557996604948571> and you won :money_with_wings: **${kazandın ||
              0}**!!`
          );
        }, 12381239219321321313123212112222222222222222222222222222222222222222222222222);
      await db.set(`bahisoynama_${message.author.id}`, Date.now());
      await db.add(`usermoney.${message.author.id}`, kazandın);
      await db.subtract(`usermoney.${message.author.id}`, 100000);
    }
  }
};
exports.config = {
  name: "coinflip",
  guildOnly: true,
  aliases: ["cf", "coinf", "cflip"]
};
