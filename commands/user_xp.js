function find_level_from_xp(total_xp){
    current_level = 0
    xp_cap = 0
    while(total_xp > 40){
        xp_cap = xp_cap + (current_level) * 40
        total_xp = total_xp - ((current_level+1)*40)
        current_level = current_level + 1
    }
    return {level: current_level, xp_cap: xp_cap}
}

module.exports.run = async (client, message, args) => {
    try{
        if (message.channel.id != '716192622212808745'){
            throw "IncorrectChannelUsage";
        }
        const user = message.mentions.users.first()
        const message_text = message.content
        // Retrieving already present information.
        var levelInfo = await client.db.get(`levelnew-${message.guild.id}-${user.id}`);
        // Determining the change requested.
        if (message_text.indexOf('+') > -1){
            xp_change = Number(message_text.split('+')[1])
        }
        else if (message_text.indexOf('-') > -1){
            xp_change = -Number(message_text.split('-')[1])
        }
        else{
            throw "CommandSyntaxError";
        }
        message.channel.send(`Old info\n level:${levelInfo.level}, total_xp:${levelInfo.totalXp}, new_xp:${levelInfo.xp}`)
        // Updating the xp and level.
        levelInfo.totalXp = levelInfo.totalXp + xp_change
        if(levelInfo.totalXp <= 0){
            levelInfo.level = 1
            levelInfo.totalXp = 0
            levelInfo.xp = 0
        }
        else{
            level_details = find_level_from_xp(levelInfo.totalXp)
            levelInfo.level = level_details.level
            levelInfo.xp = levelInfo.totalXp - level_details.xp_cap
        }
        await client.db.set(`levelnew-${message.guild.id}-${user.id}`, levelInfo)
        message.channel.send(`Updated info\n level:${levelInfo.level}, total_xp:${levelInfo.totalXp}, new_xp:${levelInfo.xp}, XP cap: ${level_details.xp_cap}`);
    }
    catch(e){
        if(e == "CommandSyntaxError"){
            message.channel.send(`Specify + or - of the xp you want to add, noob.`)
        }
        else if(e == "IncorrectChannelUsage"){
            message.author.send("This command is not to be used here noob. 500 xp taken from you.");
            message.delete()
        }
    }
}

module.exports.help = {
    name: "user_xp",
    description: "Add or subtract user xp"
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: true
}