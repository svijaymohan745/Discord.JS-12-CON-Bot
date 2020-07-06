const { token } = require("../config");
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', async () => {
	channel_id = process.argv[2];
    message_text = process.argv[3];

    var channel = client.channels.cache.find(channel => channel.id === channel_id);
    await channel.send(message_text)
    client.destroy()
});

client.login(token);