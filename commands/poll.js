const Discord = require('discord.js');

module.exports.run = async (client, message, args, level) => {
  if (message.content.startsWith("_poll")) {
  message.delete({ timeout: 0.5 });
  }
  let reactionNumber = Number(args[0]);
  try {

    if (!args.join(' ')) return message.reply('You need to supply the question');   

    title = ''
    image = ''
    options = ''

    for (i = 0; i < args.length; i++) {
      if (args[i] == "-t") {
        i = i + 1;
        if (args[i].charAt(0) == "<") {
          title = args[i].replace("<", "").replace(">", "")
          while (args[i].slice(-1) != ">") {
            i = i + 1
            title += " " + args[i].replace(">", "")
          }
          continue
        }
        else {
          return message.reply("Specify title in <>")
        }
      }
      if (args[i] == "-o") {
        i = i + 1;
        if (args[i].charAt(0) == "<") {
          options =  args[i].replace("<", "").replace(">", "")
          while (args[i].slice(-1) != ">") {
            i = i + 1
            options += " " + args[i].replace(">", "")
          }
          continue
        }
        else {
          return message.reply("Specify options in <> split by ',' ")
        }
      }
      if (args[i] == "-i") {
        i = i + 1;
        if (args[i].charAt(0) == "<") {
          image =  args[i].replace("<", "").replace(">", "")
          while (args[i].slice(-1) != ">") {
            i = i + 1
            image += " " + args[i].replace(">", "")
          }
          continue
        }
        else {
          return message.reply("Specify image link in <>")
        }
      }
    }
    number = options.split(",").length


    let embed = new Discord.MessageEmbed()
    .setTitle(title) 
    .setFooter(`select the ${number} reactions below `)
    .setImage(image)
    .setColor('#eeeeee')
    // .setDescription(":thumbsup: =" + args[3] +  "\n:thumbsdown:  = " + args[4] )
    let msg = await message.channel.send(embed);
    reactions = ["👍", "👎", "🅰️"]
    for (i = 0; i < number; i++){
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