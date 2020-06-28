module.exports = async (client, guildMember) => {
    var guild = guildMember.guild;
    if (guild.id == "720928436415365129"){
        var embed = {
            "title": "Welcome To Committee Of Noobs",
            "description": "Hello Peeps, Welcome to the CON server!",
            "color": 831018,
            "thumbnail": {
                "url": "https://i.imgur.com/mGJVLXz.png"
            },
            "image": {
                "url": "https://i.imgur.com/Ckzaw3t.png"
            },
            "fields": [
                {
                    "name": "💣",
                    "value": " Before diving into the different games you love in the server, get your Roles first by Going to <#716551185431265331>."
                },
                {
                    "name": "🎮",
                    "value": "New to Discord ?, check out <#717339670974824519> to see how its done. Feel free to ping any of the admins for any kind of stuff."
                },
                {
                    "name": "🤖",
                    "value": "Join a voice channel, talk about",
                    "inline": true
                },
                {
                    "name": "💪",
                    "value": "memes and ofc Go Pwn Some Noobs!",
                    "inline": true
                }
            ]
       };
       var channel = guildMember.guild.channels.cache.find(channel => channel.name === "general");
    }
    else if (guild.id == "724450171102036099"){
        var embed = {
            "title": "Welcome To MBA 19-21",
            "description": "Hi there, welcome to our batch group. Discord is a place where you can find integration on anything and everything.",
            "color": 831018,
            "image": {
                "url": "https://i.imgur.com/eTD9rMJ.jpg"
            },
            "fields": [
            {
                "name": "👦🏻 👧🏻",
                "value": " Head over to <#725079890004672522> get your roles to gain access to your desired channels"
            },
            {
                "name": "🎧",
                "value": "New to Discord ?, check out <#724846286830043170> to see how its done. Do text in the server if need help at anything inside discord."
            },
            {
                "name": "🤖",
                "value": "Join a voice channel, talk about",
                "inline": true
            },
            {
                "name": "💪",
                "value": "memes and check out our plethora of discussions",
                "inline": true
            }
            ]
        };
        var channel = guildMember.guild.channels.cache.find(channel => channel.name === "welcome");
    }
    guildMember.send({embed});
	if(!channel) return;
	channel.send(`Hey ${guildMember}, welcome to CON! :tada::hugging: ! Head over to <#716551185431265331>  to assign yourself roles and get into the channels :D Good luck, Have fun`)
 }