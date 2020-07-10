const { owners } = require("../config");

module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;
    if (!client.prefix[message.guild.id]) {
        client.prefix[message.guild.id] = await client.db.get(`prefix-${message.guild.id}`, client.prefix["default"]);
    }
    
    const levelInfo = await client.db.get(`levelnew-${message.guild.id}-${message.author.id}`, {
        level: 1,
        xp: 0,
        totalXp: 0

    });
  
  
    const generatedXp = Math.floor(Math.random() * 8);
    levelInfo.xp += generatedXp;
    levelInfo.totalXp += generatedXp;
    
    if (levelInfo.xp >= levelInfo.level * 40) {
        levelInfo.level++;
        levelInfo.xp = 0;
        if (levelInfo.level >= 7){
            message.member.roles.add("724237351944978452");
        if (levelInfo.level >= 12){
                message.member.roles.add("726424239615246387");
        }
    }
        
       
        message.reply(`Dayum !! 🥵 You are killing it at lvl **${levelInfo.level}**!`).then(msg => {
            msg.delete({ timeout: 60000 })
          })
        
    }
    
    await client.db.set(`levelnew-${message.guild.id}-${message.author.id}`, levelInfo);

    const args = message.content.split(/ +/g);
    const command = args.shift().slice(client.prefix[message.guild.id].length).toLowerCase();
    const cmd = client.commands.get(command);

    if(!message.content.toLowerCase().startsWith(client.prefix[message.guild.id])) return;

    if(!cmd) return;
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES")) return;

    if(cmd.requirements.ownerOnly && !owners.includes(message.author.id))
    return message.reply("Only the Bot Owner can use this command!");

    if (cmd.requirements.userPerms && !message.member.permissions.has(cmd.requirements.userPerms))
    return message.reply(`you must have the following permissions: ${missingPerms(message.member, cmd.requirements.userPerms)}`);

    if(cmd.requirements.clientPerms && !message.guild.me.permissions.has(cmd.requirements.clientPerms))
    return message.reply(`I am missing the following permissions: ${missingPerms(message.guild.me, cmd.requirements.clientPerms)}`);

    if(cmd.limits) {
        const current = client.limits.get(`${command}-${message.author.id}`);

        if (!current) client.limits.set(`${command}-${message.author.id}`, 1);
        else {
            if (current >= cmd.limits.rateLimit) return;
            client.limits.set(`${command}-${message.author.id}`, current + 1);
        }
        setTimeout(() => {
            client.limits.delete(`${command}-${message.author.id}`);
        }, cmd.limits.cooldown);
        
        
    }

    cmd.run(client, message, args);
}

const missingPerms = (member, perms) => {
    const missingPerms = member.permissions.missing(perms)
    .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``);

    return missingPerms.length > 1 >
    `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` ;
    missingPerms[0];
}

