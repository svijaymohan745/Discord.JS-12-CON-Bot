module.exports = (client) => {
    var testChannel = client.channels.cache.find(channel => channel.id === '716557043628245025');
    console.log('Welcome me into this nasty World');
    client.user.setActivity('your darkest secrets [_help]', { type: 'LISTENING'}).catch(console.error);

    setInterval(() => {
        testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
    }, 604800000);
    setInterval(() => {
        testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
    }, 691200000);
    setInterval(() => {
        testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
    }, 777600000);
    setInterval(() => {
        testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
    }, 864000000);
    setInterval(() => {
        testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
    }, 950400000);
    
}