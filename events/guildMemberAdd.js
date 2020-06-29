const fs = require('fs');

module.exports = async (client, guildMember) => {
    var guild = guildMember.guild;
    try {
        let message_text = fs.readFileSync(`messages/welcome_message/${guild.id}.json`);
        const message_json = JSON.parse(message_text);
        let message = message_json["message"]
        welcome_channel_message = message_json["message_welcome_group"]
        people_incoming = message_json["people_incoming"]

        var channel = guildMember.guild.channels.cache.find(channel => channel.name === people_incoming);
        if(!channel) return;
        console.log(welcome_channel_message)
        guildMember.send({embed: message})
        channel.send(`Hey ${guildMember}, ${welcome_channel_message}`)
    }
    catch (e) {
        console.error(e)
        console.error("Welcome message not defined for specified guild")
    }
}