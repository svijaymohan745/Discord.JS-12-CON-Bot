const request = require("request");
const { MessageEmbed  } = require("discord.js");

exports.run = async (client, message, args, level) => {
    try {
      require('request')({url: 'https://nekos.life/api/v2/fact', json: true}, (req, res, json) => {

        message.channel.send(
            {
                embed: {
                    description: json.fact,
                    title: 'Fun Fact',
                }
            });
      });
    } catch (err) {
      message.channel.send('There was an error!\n' + err).catch();
    }
  };

  module.exports.help = {
    name: "fact",
    description: "Show a random fact",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}