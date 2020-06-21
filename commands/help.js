module.exports.run = (client, message, args) => {
    var command_list = []
    for (var command of client.commands){
        if(command[1].help.private) continue;
        var command_name = "_" + command[0];
        var command_help = command[1].help.description;
        command_list.push({"name": `**${command_help}**`,
                             "value": command_name});
    }
    reply = {
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            "title": "Help Commands",
            "description": "All the Commands that this amazing bot can do <:pog:716321868528877599>",
            "fields": command_list 
        },
    }
    message.reply(reply);

}

module.exports.help = {
    name: "help",
    description: "The help command (You are looking right at it!)",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}