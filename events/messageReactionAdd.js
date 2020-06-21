function find_level_from_xp(total_xp){
    current_level = 1
    xp_cap = 0
    while(total_xp > 40){
        console.log(xp_cap)
        total_xp = total_xp - ((current_level)*40)
        current_level = current_level + 1
        xp_cap = xp_cap + (current_level - 1) * 40
    }
    return {level: current_level, xp_cap: xp_cap}
}

module.exports = async (client, messageReaction, user) => {
    if(messageReaction.message.author == user) return;
    var author = messageReaction.message.author
    var guild_id = messageReaction.message.guild.id
    
    var levelInfo = await client.db.get(`levelnew-${guild_id}-${author.id}`);
    if (typeof levelInfo === "undefined") return;

    levelInfo.totalXp = levelInfo.totalXp + 3
    level_details = find_level_from_xp(levelInfo.totalXp)
    levelInfo.level = level_details.level
    levelInfo.xp = levelInfo.totalXp - level_details.xp_cap
    
    await client.db.set(`levelnew-${guild_id}-${author.id}`, levelInfo)
}