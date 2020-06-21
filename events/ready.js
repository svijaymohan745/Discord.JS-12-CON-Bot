module.exports = (client) => {
    var testChannel = client.channels.cache.find(channel => channel.id === '720928436415365132');
    console.log('Welcome me into this nasty World');
    client.user.setActivity('your darkest secrets [_help]', { type: 'LISTENING'}).catch(console.error);
    time_interval = 1000 * 60 * 60 * 24
    setInterval(() => {
        testChannel.send("Please remember to spam those contracts till nothing is left.");
    }, time_interval);
}