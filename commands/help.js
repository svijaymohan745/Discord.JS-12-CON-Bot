module.exports.run = (client, message, args) => {
    reply = {
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            "title": "Help Commands",
            "description": "All the Commands that this amazing bot can do <:pog:716321868528877599>",
            "fields": [
                {
                    "name": "**Meme Command**",
                    "value": "_meme"
                },
                {
                    "name": "**Help Command(You are looking right at it**)",
                    "value": "_help "
                },
                {
                    "name": "**Levels - Check your Server Level**",
                    "value": "_rank"
                },
                {
                    "name": "**Check another guy's rank**",
                    "value": "_rank @username"

                },
                {
                    "name": "**Server Leaderboards**",
                    "value": "_leaderboard"

                },
                {
                    "name": "**Ping Command**",
                    "value": "_ping"
                },
            ]
        },
    }
    message.reply(reply);

}

module.exports.help = {
    name: "help",
    description: "The help command"
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}