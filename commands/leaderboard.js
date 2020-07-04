const { MessageEmbed } = require("discord.js");
const functions = require("../structures/functions");

module.exports.run = async (client, message, args) => {
    let data = await client.db.getAll(`levelnew-${message.guild.id}`);
    data = data.sort((a, b) => b.value.totalXp - a.value.totalXp);
    data = await Promise.all(data.map(async (data, index) => {
        const user = await client.users.fetch(data.key.split("-")[2]).catch(() => null);
        if (user) {
            return {
                tag: user.tag,
                level: data.value.level,
                rank: index + 1
            }
            
        }
    }))
    if (!data.length) return message.reply("there is no leaderboard for this server yet!");

    const page = functions.pages(data, 10, args[0] || 1);
    if (!page) return message.reply("this page does not exist");

    message.channel.send(new MessageEmbed()
    .setAuthor(`Leaderboard | ${message.guild.name}`, message.guild.iconURL())
    .setColor("#f44336")
    .setDescription(page.map(e => `\`#${e.rank}\` | **${e.tag}** (Level ${e.level})`))
    
    );
}

module.exports.help = {
    name: "leaderboard",
    description: "View the rank leaderboard for this server",
    private: false
}

module.exports.requirements = {
    ownerOnly: false,
    userPerms: [],
    clientPerms: []
}

module.exports.limits = {
    cooldown: 6e4,
    rateLimit: 3
}