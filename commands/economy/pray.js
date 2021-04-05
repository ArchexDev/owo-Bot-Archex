const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let timeout = 25000;

  let crime = await db.fetch(`prayoynama_${message.author.id}`);

  if (crime !== null && timeout - (Date.now() - crime) > 0) {
    let time = ms(timeout - (Date.now() - crime));
    return message.channel.send(`:stopwatch: **| ${message.author.username}**! Please wait **${ time.seconds
              ? time.seconds + "s** and try again!"
              : ""
          }`
    );
  }
    let praypoint = rastgeleMiktar(1,2);
    let pray = db.fetch(`praypuan.${message.author.id}`);
    message.channel.send(`:pray: **| ${message.author.username}** prays... Fortune favors you!\n<:head:823557996604948571> **|** You have **${pray || 0}** luck point(s)!`);
  db.add(`praypuan.${message.author.id}`, praypoint)
  db.set(`prayoynama_${message.author.id}`, Date.now());
};

exports.config = {
  name: "pray",
  guildOnly: true,
  aliases: []
};
