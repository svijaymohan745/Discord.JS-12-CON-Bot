
module.exports.run = async (client, message) => {
    message = await message.channel.messages.fetch("730411514447659049")
    for (item of message.reactions.cache){
        console.log(item[1].message.author)
    }
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