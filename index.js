const { token, prefix } = require("./config");
const { Client, Collection } = require("discord.js");
const { VultrexDB } = require("vultrex.db");
const Discord = require('discord.js');
const { MessageEmbed  } = require("discord.js");


const client = new Client({
    disableEveryone: true,
    disabledEvents: ["TYPING_START"]

});

const db = new VultrexDB({
    provider: "sqlite",
    table: "main",
    fileName: "main"
});

db.connect().then(() => {
    client.prefix = new Object();
    client.prefix["default"] = prefix;
    client.db = db;
    client.snipes = new Map();
    client.commands = new Collection();
    client.limits = new Map();
    
    const commands = require("./structures/command");
    commands.run(client);
    
    const events = require("./structures/events");
    events.run(client);
    
    client.login(token);
});

client.on('ready', () => {
	var testChannel = client.channels.cache.find(channel => channel.id === '716557043628245025');
	console.log('Welcome me into this nasty World');
	client.user.setActivity('your darkest secrets [_help]', { type: 'LISTENING'}).catch(console.error);

	setInterval(() => {
		testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
	}, 604800000);
	setInterval(() => {
		testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
	}, 691200000);
	setInterval(() => {
		testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
	}, 777600000);
	setInterval(() => {
		testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
	}, 864000000);
	setInterval(() => {
		testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
	}, 950400000);

})
 
 
