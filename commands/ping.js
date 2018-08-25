exports.run = (client, message) => {
    message.channel.send('Pong').then(m => m.edit(`:heartbeat: ${Math.round(client.ping)}ms.`))
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: '+ping',
    description: 'Ping/Pong command. I wonder what this does? /sarcasm',
    usage: '>ping'
  };