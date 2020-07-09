const joke = require('one-liner-joke').getRandomJoke;

module.exports.run = async (client, message, args, level) => {
  try {
    message.channel.send(joke({'exclude_tags': ['dirty', 'racist', 'marriage', 'sex', 'death']}).body);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.help = {
    name: "randomjoke",
    description: "Displays a random joke",
    private: false
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}