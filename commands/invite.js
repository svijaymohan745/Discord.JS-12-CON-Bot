const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch')

module.exports.run = async (client, message, args) => {
        var colour_array = ["1211996"]
        var randomNumber = getRandomNumber(0, colour_array.length - 1);
        var randomColour = colour_array[randomNumber];

        var CONBot_invite_link = "https://discord.com/api/oauth2/authorize?client_id=720371671248273518&permissions=0&scope=bot"
        message.channel.send(
            {
                embed: {
                    description: "Use this link to invite me to other servers :eyes:",
                    title: `CON Bot Invite Link`,
                    thumbnail: {
                        url: 'https://i.imgur.com/mGJVLXz.png',
                    },
                    fields: [
                        {
                            name: `Link`,
                            value: `${CONBot_invite_link}`
                        }   
                    ]

                }
            });

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    };


module.exports.help = {
    name: "invite",
    description: "Invite Link for CON Bot",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}