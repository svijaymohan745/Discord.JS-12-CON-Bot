module.exports.run = (client, message, args) => {
    message.reply(`Pong! ${client.ws.ping.toFixed(2)}ms`);

}

module.exports.help = {
    name: "ping",
    description: "Just a Ping",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}