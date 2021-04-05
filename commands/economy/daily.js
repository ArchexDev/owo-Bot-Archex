const ms = require("parse-ms");
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let times = await db.fetch(`worktime_${message.author.id}`);
  let day = 86400000;
  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    message.channel.send(`:stopwatch: Nu! **${message.author.username}**! You need the wait **${
            time.hours ? time.hours + "H" : ""
          } ${time.minutes ? time.minutes + "M" : ""} ${
            time.seconds
              ? time.seconds + "S**"
              : ""
          }`
    );
    return;
  }
  let time = ms(day - (Date.now() - times))
    let moneys = rastgeleMiktar(100, 1100);
      message.channel.send(`:moneybag: **| **, Here is your daily :money_with_wings: **${moneys} uwu money**!\n:stopwatch: **|** Your next daily is in: ${
            time.hours ? time.hours + "H" : ""
          } ${time.minutes ? time.minutes + "M" : ""} ${
            time.seconds
              ? time.seconds + "S**"
              : ""
          }`);
    db.add(`usermoney.${message.author.id}`, moneys)
    db.set(`worktime_${message.author.id}`, Date.now());
};

exports.config = {
  name: "daily",
  guildOnly: true,
  aliases: ["claim"]
};
