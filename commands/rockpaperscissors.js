const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, level) => {
    choices = ['rock','paper','scissors']
    try {
      if (!args[0]) return message.reply('You need to input rock, paper, or scissors!');
      
      if (!choices.includes(args[0])) return message.reply('You need to choose rock, paper, or scissors!');
      
      let urps = args[0];
      let brps = choices[Math.floor(Math.random()*choices.length)]
      let low;
      
      if (urps == brps) low = 'Tie!';
      
      if (urps == 'rock' && brps == 'paper' && !low) low = 'I Win!';
      if (urps == 'scissors' && brps == 'rock' && !low) low = 'I Win!';
      if (urps == 'paper' && brps == 'rock' && !low) low = 'You Win!';
      if (urps == 'rock' && brps == 'scissors' && !low) low = 'You Win!';
      if (urps == 'paper' && brps == 'scissors' && !low) low = 'I Win!';
      if (urps == 'scissors' && brps == 'paper' && !low) low = 'You Win!';
      message.channel.send(
        {
            embed: {
                title: low,
                description: 'I choose ' + brps + '\nAnd you choose ' + urps,
            }
        });
      
    } catch (err) {
      message.channel.send('There was an error!\n' + err).catch();
    }
  };

  module.exports.help = {
    name: "rps",
    description: "Rock Paper Scissors Game",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}