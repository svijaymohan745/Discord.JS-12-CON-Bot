module.exports.run = async (client, message, args) => {
    try{
        const user = message.mentions.users.first()
        new_level_info = {
            level: 1,
            xp: 0,
            totalXp: 0
        }
        await client.db.set(`levelnew-${message.guild.id}-${user.id}`, new_level_info)
        message.channel.send(`Level info of ${user} reset successfully!`);
    }
    catch (TypeError){
        message.channel.send("Please specify a user to reset or else I'll reset everyone. -_-");
    } 
}

module.exports.help = {
    name: "reset_level",
    description: "This command resets the level.",
    private: true
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: true
}