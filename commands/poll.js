const Discord = require('discord.js');

module.exports.run = async (client, message, args, level) => {
  if (message.content.startsWith("_poll")) {
    message.delete({ timeout: 0.5 });
  }
  let reactionNumber = Number(args[0]);
    try {
      if (!args.join(' ')) return message.reply('You need to supply the question');   
      let embed = new Discord.MessageEmbed()
      .setTitle(args[1])
      .setFooter(`select the ${reactionNumber} reactions below `)
      .setImage(args[2])
      .setColor('#eeeeee')
      .setDescription(":thumbsup: =" + args[3] +  "\n:thumbsdown:  = " + args[4] )
      let msg = await message.channel.send(embed);
      reactions = ["👍", "👎", "🅰️"]
      for (i = 0; i < reactionNumber; i++){
        await msg.react(reactions[i])
      }

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