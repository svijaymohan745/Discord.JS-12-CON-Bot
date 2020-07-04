const questions = require('../messages/wyr/would-you-rather.json');
const { MessageEmbed  } = require("discord.js");
const Discord = require('discord.js');

module.exports.run =  async (client, message, args) => {


    var messagetext =  questions[Math.floor(Math.random() * questions.length)]
    var question = messagetext.split("Would you rather ")[1]
    var Option1 = question.split(" or ")[0]
    var Option2 = question.split(" or ")[1]

    reply = {
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            "title": "Help Commands",
            "description": `Would you rather \n 🅰️ ${Option1} \n or \n :regional_indicator_b: ${Option2}`,
           
        },
    }
    wyrmessage = await message.channel.send(reply);
    wyrmessage.react('🅰️')
    wyrmessage.react('🇧')


}
module.exports.help = {
    name: "wyr",
    description: "The Would you Rather game"
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}