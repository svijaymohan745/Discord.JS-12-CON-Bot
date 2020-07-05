const utils = require('../utils/utils.js')

module.exports = async (client, messageReaction, user) => {
    if(messageReaction.message.author == user) return;
    var author = messageReaction.message.author
    var guild_id = messageReaction.message.guild.id
    
    var levelInfo = await client.db.get(`levelnew-${guild_id}-${author.id}`);
    if (typeof levelInfo === "undefined") return;

    levelInfo.totalXp = levelInfo.totalXp + 3
    level_details = utils.find_level_from_xp(levelInfo.totalXp)
    levelInfo.level = level_details.level
    levelInfo.xp = levelInfo.totalXp - level_details.xp_cap

    await client.db.set(`levelnew-${guild_id}-${author.id}`, levelInfo)
}