
module.exports.run = async (client, message, args) => {
    id = args[0]
    message = await message.channel.messages.fetch(id)
    reactions = message.reactions.cache.array()
    users = reactions[0].users
    console.log(users.partial)
  
}

module.exports.help = {
    name: "gg",
    description: "This command resets the level.",
    private: true
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}