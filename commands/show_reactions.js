
module.exports.run = async (client, message, args) => {
    id = args[0]
    reactions = await message.channel.messages.fetch(id).reactions
    console.log(reactions)
    // reaction =  reactions.cache.first()
    // const users = reaction.users
    // console.log(reactions.partial)
  
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