const { token, prefix } = require("./config");
const { Client, Collection } = require("discord.js");
const { VultrexDB } = require("vultrex.db");

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
