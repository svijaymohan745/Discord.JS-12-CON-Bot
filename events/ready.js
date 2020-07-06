module.exports = (client) => {
    console.log('Welcome me into this nasty World');
    client.user.setActivity('your darkest secrets [_help]', { type: 'LISTENING'}).catch(console.error);
}