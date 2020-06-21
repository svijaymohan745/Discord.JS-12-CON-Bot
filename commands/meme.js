const randomPuppy = require("random-puppy");
const { MessageEmbed  } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const subReddits = ["dankmeme", "dankmemes","memes", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const meme = await randomPuppy(`${random}`).catch((error) => {
        console.error(error);
    });
    const embed = new MessageEmbed().setColor("RANDOM").setImage(meme)
    .setTitle(`From /r/${random}`)
    .setURL(`https://www.reddit.com/r/${random}`);
    message.channel.send(embed)

}

module.exports.help = {
    name: "meme",
    description: "Meme command - Get a random meme!",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}