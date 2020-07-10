let coins = require("../coins.json");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args, client) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("<:CONcoin:719543153107009558>", uCoins);

  message.channel.send(coinEmbed).then(msg => {
    msg.delete({ timeout: 10000 })
  })

}

module.exports.help = {
    name: "coin",
    description: "Shows your coins balance",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}