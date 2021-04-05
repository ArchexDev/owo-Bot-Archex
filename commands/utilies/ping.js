exports.run = async (client, message, args) => {
  let botping = client.ws.ping;
  this.ping = botping;
  message.channel.send(`:ping_pong: | ...pong! In ${this.ping}ms`)
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: ["latency"]
};