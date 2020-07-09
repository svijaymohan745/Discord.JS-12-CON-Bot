const Discord = require('discord.js');

module.exports.run = async (client, message, args, level) => {
    try {
      if (!args.join(' ')) return message.reply('You need to supply the question');
      
      let embed = new Discord.MessageEmbed()
      .setTitle(args.join(' '))
      .setDescription('Poll created by ' + message.author.tag)
      .setColor('#eeeeee');
  
      let msg = await message.channel.send(embed);
      
      await msg.react('👍');
      await msg.react('👎');
    } catch (err) {
      message.channel.send('There was an error!\n' + err).catch();
    }
  };
module.exports.help = {
    name: "poll",
    description: "Create a poll",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}