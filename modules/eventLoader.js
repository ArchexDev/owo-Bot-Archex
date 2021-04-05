const reqEvent = event => require(`../events/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
  client.on('message', reqEvent('message1'));
  client.on('message', reqEvent('message2'));
  client.on('message', reqEvent('message3'));
  client.on('message', reqEvent('message4'));
};